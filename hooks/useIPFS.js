import { useState, useEffect } from 'react';

const useIPFS = (hash, filename) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    //setFile(`https://gateway.ipfscdn.io/ipfs/${hash}?filename=${filename}`);
    setFile(`https://ipfs.telos.miami/ipfs/${hash}?filename=${filename}`);

  }, []);

  return file;
};

export default useIPFS;
