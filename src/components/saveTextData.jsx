import React, {useRef} from "react";
import axios from "axios";
import useSWR from "swr";
import '../App.css'
import {exportAsImage,downloadImage, shareImage} from "../utils/exportAsImage";
import ColorPallete from "../utils/colorPallete";
import '../App.css'
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';

const fetcher = url => axios.get(url).then(({data}) => data);

const SaveTextData = ({id}) => {
    const exportRef = useRef()
    const { data: noteData } = useSWR(`/api/v1/notes/${id}`, fetcher, { suspense: true});
    return(
        <div className="share-text">
            <div ref={exportRef} className="text-holder">
                <p>{noteData.note.title}</p>
                <p></p>
                <p>{noteData.note.body}</p>
            </div>
            <div className="select-color">
                {
                    ColorPallete.map((data, index) => 
                        <div key={index} className="box-select" style={data} onClick={() => {
                            exportRef.current.style.backgroundColor = `${data.backgroundColor}`
                            exportRef.current.style.color = `${data.color}`
                        }}></div>
                    )
                }
            </div>
            <div>
                <button className='btn-flex' onClick={()=>{
                        if(navigator.share){
                            navigator.share({
                                text: `${noteData.note.title} ${noteData.note.body}`
                            }).then(()=>{
                                console.log('Thanks for sharing')
                            }).catch((err)=>{
                                console.log(err)
                            })
                        }else{
                            console.log('Browser does not support API')
                        }
                    }}><ShareIcon sx={{color: '#fff'}}/>Share as text</button>
                <button className='btn-flex' onClick={async()=> {
                    const blob = await exportAsImage(exportRef.current)
                    shareImage(blob, 'note.png')
                    }}><ShareIcon sx={{color: '#fff'}}/>Share as image</button>
                <button className='btn-flex' onClick={async() => {
                    const blob = await exportAsImage(exportRef.current)
                    downloadImage(blob, 'note')
                    }}><DownloadIcon sx={{color: '#fff'}}/>Download image</button>
            </div>
        </div>
    )
}

export default SaveTextData