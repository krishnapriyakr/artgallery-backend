
const artwork=require('../Model/artworkSchema')

//upload property
exports.uploadArt = async(req, res) => {
    console.log("Inside upload property function");
    const userId = req.payload

    const { title,category,artist,dimensions,price,description } = req.body
    const artimg = req.file.filename;
     console.log(artimg);
    // res.status(200).json("upload addwork request recieved")
    console.log("userid==",userId);
    try {
        const existingArt = await artwork.findOne({ title,category })
        if (existingArt)
        {
            res.status(406).json("a already exist!! add another one")
        }
        else {
            const newArtwork = new artwork({
                title,category,artist,dimensions,price,description,artimg,userId,
                
            })
            await newArtwork.save()
           return res.status(200).json(newArtwork)
        }
    } catch(err) {
      return  res.status(401).json(`add work api failed,Error:${err}`)
   }
}


//getAll artworks
exports.getallarts = async (req, res) => {
    try {
        const allartworks = await artwork.find()
        res.status(200).json(allartworks)
    }
    catch(err){
        res.status(401).json(`Failed to fetch user properties. Error: ${err}`);
    }
}
