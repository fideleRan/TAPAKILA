import { extname } from "path"

export const profileUserInterceptor = (req,file,callback) =>{
    let extension = extname(file.originalname);
    let fileName = `${(Math.random()*10000000).toFixed()}`
    fileName +=`${fileName}${extension}`
    callback(null,fileName)
    
}

export const profileOrgInterceptor = (req,file,callback) =>{
    let extension = extname(file.originalname);
    let fileName = `${(Math.random()*10000000).toFixed()}`
    fileName +=`${fileName}${extension}`
    callback(null,fileName)
}

export const eventInterceptor = (req,file,callback) =>{
    let extension = extname(file.originalname);
    let fileName = `ev-${(Math.random()*10000000).toFixed()}`
    fileName +=`${fileName}${extension}`
    callback(null,fileName)
}