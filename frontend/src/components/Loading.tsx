import ReactLoading from 'react-loading';
import style from './styles/Loading.module.css';

function Loading() {
  return (
    <div className={ style.loadingContainer }>
      <ReactLoading
        className={ style.loading }
        type="bubbles"
        color="#FFBA14"
        width={ 120 }
        height={ 120 }
      />
    </div>
  );
}

export default Loading;
