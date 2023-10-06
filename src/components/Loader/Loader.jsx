import { RevolvingDot } from 'react-loader-spinner';

const Loader = () => {
  return (
    <RevolvingDot
      radius="45"
      strokeWidth="5"
      color="red"
      secondaryColor="green"
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
