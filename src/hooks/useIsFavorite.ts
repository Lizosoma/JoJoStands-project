import { useSelector } from 'react-redux';
import { IStand } from '../types/stand.interface';

const useIsFavorite = () => {
  const favorites = useSelector((state: any) => state.favoriteReducer);

  const isFavorite = (stand: IStand) => {
    return Object.keys(favorites).includes(stand.id);
  };

  return {
    isFavorite,
  };
};

export default useIsFavorite;
