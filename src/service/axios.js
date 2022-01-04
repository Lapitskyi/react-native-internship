import axios from 'axios';
import {requestRickAndMortyLocation} from '../redux/rickAndMorty/rickAndMortyAction';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  // baseURL: process.env.REACT_API_RICK_AND_MORTY ,
  method: 'get',
  headers: headers,
});

export const API = {
    getRickAndMortyLocation(){
        return instance().then(response =>{
            return response.data
        })
    },
    getRickAndMortyCharter(){
        return instance().then(response =>{
            return response.data
        })
    },
    getRickAndMortyEpisode(){
        return instance('episode').then(response =>{
              return response.data
        })
    }
}
