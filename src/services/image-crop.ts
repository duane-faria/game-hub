export const getCroppedImageUrl = (url: string) => {
  const urlPathName = "/media";
  let index = url.indexOf(urlPathName) + urlPathName.length;

  return (
    url.slice(0, index) +
    url.slice(index).replace(urlPathName, "/media/crop/600/400")
  );
};
