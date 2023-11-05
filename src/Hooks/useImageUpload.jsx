const useImageUpload = () => {

    const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const imgRes = await response.json();
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    return imgURL;
                }
            }
        } catch (error) {
            console.error('Image upload failed:', error);
        }

        return null;
    };

    return { uploadImage };
};

export default useImageUpload;
