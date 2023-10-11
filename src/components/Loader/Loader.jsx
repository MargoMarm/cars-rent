import { RevolvingDot } from 'react-loader-spinner';
import { colors } from 'utils';

const Loader = () => {
  return (
    <RevolvingDot
      radius="45"
      strokeWidth="5"
      color={colors.btnMain}
      secondaryColor={colors.secondaryColor}
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{ margin: "0 auto", marginTop: "30px" }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
