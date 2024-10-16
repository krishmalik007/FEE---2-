function DownloadFile(url,download){
    // url Downloading : making it readdy for zip conversation 
    console.log("starting downloading.........");
    setTimeout(() => {
        let path =  url.split("/").pop();
        download(path);
    }, 2000);
}


function compressFile(path, compress) {
    // url data zip convert : url data compress
console.log("file started compressing");
setTimeout(() => {
    const comp = path.split(".")[0] + ".zip";
    compress(comp);
}, 2000);
}


function uploadFile(comp ,upload) {
    console.log("file start uploading ");
    setTimeout(() => {
        const upl = "http://LocalStorage" + comp;
        upload(upl);
    }, 2000);
}


DownloadFile("https://www.xyz.com/abc.mp3" , 
    function(path){
        console.log(`file downloaded succesfully ${path}`);
        compressFile(path, function(comp){
            console.log(`file compressed succesfully ${comp}`);
            uploadFile(comp, function(upl){
                console.log(`file upload succesfully ${upl}`);
                console.log("everything is done !!")
            });
        });
    }
);