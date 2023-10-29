import html2canvas from "html2canvas";

const exportAsImage = async (element) => {
    let height = element.clientHeight
 
    if(element.scrollHeight > element.clientHeight){
        height = element.scrollHeight
    }

    element.style.height = height + 'px'

    const canvas = await html2canvas(element);
    element.style.height = null
    const image = canvas.toDataURL("image/png", 1.0);
    return image
};

const shareImage = async(blob, imageFileName) => {
    const blobx = await fetch(`${blob}`)
    const res = await blobx.blob()
    if(navigator.share){
        navigator.share({
            files: [
                new File([res], imageFileName, {
                    type: res.type
                })
            ]
        }).then(()=>{
            console.log('Thanks for sharing')
        }).catch((err)=>{
            console.log(err)
        })
    }else{
        console.log('Browser does not support API')
    }
}

const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;
  
    fakeLink.href = blob;
  
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
  
    fakeLink.remove();
};

export {exportAsImage, shareImage, downloadImage}