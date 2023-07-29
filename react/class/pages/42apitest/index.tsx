import axios from "axios"
import oauth from 'axios-oauth-client'
import queryString from "query-string";



import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';


import { Strategy } from "passport-oauth2"
import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";

const OAUTH42_SERVER = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-977ad9bafe3e3762a97d57c6c4914aad67cf3bed866e1a332bb95d6991843033&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F42apitest&response_type=code"

export default function APITest42() {

    const { search } = useRouter;

    const values = queryString.parse(search);

    console.log(values);

    const router = useRouter();


    const Oauth = () => {        
    }

    const PopUp= () => {
        const width = 500; // 팝업의 가로 길이: 500
        const height = 400; // 팝업의 세로 길이 : 500
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top  = window.screenY + (window.outerHeight - height) / 2;
        window.open( OAUTH42_SERVER, "로그인 중...", `width=${width},height=${height},left=${left},top=${top}`)        
    }

    
    return (
        <div>
            <button onClick={Oauth}> dd토asd큰 </button>
            <button onClick={PopUp}> add </button>
            hello wolrdd
        </div>
    )
}

