import fetch from "node-fetch"
import {VercelRequest, VercelResponse} from '@vercel/node'

const { APIKEY } = process.env

export default async function handler(request : VercelRequest, response : VercelResponse) {
    const {title, page, id} = JSON.parse(request.body) 
    const url = id 
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full` //상세정보
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}` //영화 목록
    
    const res = await fetch(url)
    const json = await res.json()
    response
        .status(200)
        .json(json)
    
}