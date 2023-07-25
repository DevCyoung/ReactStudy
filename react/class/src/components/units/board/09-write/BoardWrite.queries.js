//graph ql setting 을 위한 gql
import {gql } from '@apollo/client' //이거있어야한다. 밖에서 import 하기위헤선 export해야함
export const myGraphQLSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`

//graph ql setting 을 위한 gql
export const UPDATE_BOARD = gql`
    mutation updateBoard($number: Int, $writer: String, $title: String, $contents: String) {
      updateBoard(number: $number, writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`