import html2canvas from "html2canvas";

const exportAsImage = async (element) => {
    const html = document.getElementsByTagName("html")[0];
    const body = document.getElementsByTagName("body")[0];
    let htmlWidth = html.clientWidth;
    let bodyWidth = body.clientWidth;

    const newWidth = element.scrollWidth - element.clientWidth;

    if (newWidth > element.clientWidth) {
        htmlWidth += newWidth;
        bodyWidth += newWidth;
    }

    html.style.width = htmlWidth + "px";
    body.style.width = bodyWidth + "px";

    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    return image
    html.style.width = null;
    body.style.width = null;
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
    console.log(blob)
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