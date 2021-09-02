import Loader from 'react-loader-spinner';

const containerStyle = {
  textAlign: 'center' as 'center',
};

export const LoadingSpinner = () => {
  return (
    <div style={containerStyle}>
      <Loader type="TailSpin" height={100} width={100} color="#eaeaea" />
    </div>
  );
};
