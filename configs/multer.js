import multer from "multer"

const strorage = multer.diskStorage({
    destination:  (req, file, done) => {
        if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            done(null, 'public/images');
        }else{
            done(new Error('not images'), false)
        }
    },
    filename: (req, file, done) => {
        done(null,file.originalname)
    }
});

const upload = multer({storage: strorage});

export default upload;