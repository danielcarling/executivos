const px2vw = (size: number, width: number = 1512): string => `${(size / width) * 100}vw`;

export default px2vw;