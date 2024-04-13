// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here

// 1. Import multer.
import multer from 'multer';

// 2. Configure storage with filename and location.

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString() + file.originalname
    );
  },
});

export const upload = multer({
  storage: storage,
});
