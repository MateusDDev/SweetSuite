import style from './styles/Loading.module.css';
import loadingIcon from '../../public/loadingGif.webp';

function Loading() {
  return (
    <div className={ style.imgContainer }>
      <img className={ style.img } src={ loadingIcon } alt="loading icon" />
    </div>
  );
}

export default Loading;
