import React, {useEffect} from 'react';
import List from '../components/List/List';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {Text} from 'react-native';
import {
    requestRickAndMortyCharter,
    requestRickAndMortyEpisode,
    requestRickAndMortyLocation,
} from '../redux/rickAndMorty/rickAndMortyAction';

const Category = () => {
 const {error,loading,episode, location, character} = useAppSelector(state => state.rickAndMortyReduce)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(requestRickAndMortyEpisode())
        dispatch(requestRickAndMortyLocation())
        dispatch(requestRickAndMortyCharter())
    },[])

  return(
      <>
          {error ? <Text>{error}</Text>:
              loading ?  <Text>...loading</Text>:
              <List /> }

      </>

  )
};

export default Category;

