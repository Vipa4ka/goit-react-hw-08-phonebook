// import { useState } from 'react';
// import axios from 'axios';

// export default function UploadViewb() {

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const file = e.target.file.files[0];
//         const formData = new FormData();
//         formData.append('image', file, file.name);

//         axios.post('адрес от бекендщика', formData)
//             .then(console.log)
//             .catch(console.error);
//     }

//     return <form onSubmit={handleSubmit}>
//         <input type="file" name="file" />
//         <button type="submit">DOWNLOAD</button>
//     </form>;
// }

// отправка с фронта
