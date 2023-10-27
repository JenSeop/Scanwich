import React, { useState } from 'react';
import {
  Typography, Modal, Box
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modal1( {onClose, modalTitle, modalDescription} ) {

  
 /* Modal */  
 const [open, setOpen] = useState(true);
//  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤 위치 저장

//  const handleOpen = () => {
//    setScrollPosition(window.scrollY); // 모달 열릴 때 스크롤 위치 저장
//    setOpen(true);
//  };

 const handleClose = () => {
   setOpen(false);
  //  window.scrollTo(0, scrollPosition); // 모달 닫힐 때 스크롤 위치 복원
   onClose(); // 상위 컴포넌트에서 모달닫기
 };

//  useEffect(() => {
//   if (open) {
//     document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 막기
//   } else {
//     document.body.style.overflow = 'auto'; // 모달 닫힐 때 스크롤 복원
//     window.scrollTo(0, scrollPosition); // 스크롤 위치 복원
//   }
// }, [open, scrollPosition]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalDescription}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}