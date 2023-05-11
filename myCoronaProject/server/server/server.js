                       const express = require("express");
                       const cors = require("cors");
                    //    const multer = require('multer');
                       const app=express();
                       require("./configs/database")
                       const MemberRouter =require("./routes/memberRouter")
                       app.use(cors())                      
                       app.use(express.json())
                       app.use(express.urlencoded({extended:false}))
                       app.use("/api/members",MemberRouter);

                    //    const storage = multer.diskStorage({
                    //     destination: function (req, file, cb) {
                    //       cb(null, 'uploads/')
                    //     },
                    //     filename: function (req, file, cb) {
                    //       cb(null, file.originalname)
                    //     }
                    //   });
                    //   const upload = multer({ storage: storage });

                    //     // Create an endpoint to handle file uploads
                    //      app.post('/upload', upload.single('image'), (req, res) => {
                    //     res.json({ message: 'File uploaded successfully' });
                    //     });


                       app.listen(5000,()=>{
                           console.log("listening port 5000 !!!");
                       })
