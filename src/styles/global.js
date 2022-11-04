import {createGlobalStyle} from 'styled-components';
export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before{
      box-sizing: border-box;
}

body{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      height:100%;
      width:100%;
      background: ${ ({theme})=> theme.background } ;
      color: ${ ({theme})=> theme.title } ;
      padding:0;
      margin:0;
      transition: all 0.25s linear;
      overflow-y: scroll; 
  }
  .canvas{
      align-items:center;
      display:grid;
      gap:0.5rem;
      grid-auto-flow: row;
      grid-template-row: auto 1fr auto;
      min-height: 100vh;
      padding:1rem;
      width:100vw;
  }
  .type-box{
      display:block;
      max-width:1000px;
      height:140px;
      overflow:hidden;
      margin-left:auto;
      margin-right:auto;
      position:relative;
  }
  .words{
      font-size: 28px;
      display:flex;
      flex-wrap:wrap;
      align-content:center;
      width:100%;
      color: ${ ({theme})=> theme.typeBoxText}
  }
  .word{
      margin:5px 5px;
      padding-right:2px;
      scroll-margin:4px;
  }
  .hidden-input{
      opacity:0
  }
  .char.correct{
      color: ${ ({theme})=> theme.title };
  }
  .char.incorrect{
      color:red;
  }
  .current{
      border-left: 1px solid;
      animation: blinking 2s infinite;
      animation-timing-function: ease;
      @keyframes blinking{
      0% {border-left-color:${ ({theme})=> theme.title };}
      25% {border-left-color:${ ({theme})=> theme.background };}
      50% {border-left-color:${ ({theme})=> theme.title };}
      75% {border-left-color:${ ({theme})=> theme.background };}
      100% {border-left-color:${ ({theme})=> theme.title };}
    
      }
  }
  .right{
      border-right: 1px solid;
      animation: blinkingRight 2s infinite;
      animation-timing-function: ease;
      @keyframes blinkingRight{
      0% {border-left-color:${ ({theme})=> theme.title };}
      25% {border-left-color:${ ({theme})=> theme.background };}
      50% {border-left-color:${ ({theme})=> theme.title };}
      75% {border-left-color:${ ({theme})=> theme.background };}
      100% {border-left-color:${ ({theme})=> theme.title };}
    
      }
  }
  .upper-menu{
      display: flex;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-between;
      padding:1rem;
      color: ${ ({theme})=> theme.typeBoxText}
  }
    .time-mode, .word-mode{
      display: flex;
  }

  .time, .no-of-words{
      font-size: 20px;
      margin-right: 15px;
  }
  .time:hover, .no-of-words:hover{
      color:${ ({theme})=> theme.title };
      cursor:pointer;
  }
  .counter{
      font-size: 20px;
  }
  .header{
      display: flex;
      width: 1000px;
      height: 60px;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-between
  }
  
  .stats-box{
      display:flex;
      max-width:1000px;
      height:auto;
      margin-left:auto;
      margin-right:auto;
      position:relative;
  }
  .left-stats{
      padding:30px;
      width:30%;
  }
  .stats{
    height:80%;
    padding-bottom:1rem;
    color:#fff;
}

  .title{
      font-size: 20px;
      color: ${ ({theme})=> theme.typeBoxText };
  }
  .subtitle{
      font-size: 30px;
      color: ${ ({theme})=> theme.title };
  }
  .right-stats{
      width:70%;
  }
  .graph{
    height:80%;
}

.footer{
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    align-self: end;
    align-items: center;
}

.actual-footer{
    display:flex;
    justify-content: space-between;
    width: 1000px;
}
.hint{
    kbd{
        background-color: ${ ({theme})=> theme.title };
        color: ${ ({theme})=> theme.background };
        padding: 2.5px 5px;
        border-radius: 3px;
    }
}
.instruction{
    color: ${ ({theme})=> theme.title };
}



  .theme-options{
      background:red;
      min-width: 100px;
  }
  .select{
      color: #fff,
      min-width: 90px
  }
  .reset-btn{
    display:block;
    margin:auto;
    transform: scale(1.5);
}
.reset-btn:hover{
    background: ${ ({theme})=> theme.typeBoxText };
}

.user-profile{
    // width:1000px;
    // margin:auto;
    display:flex;
    min-height:15rem;
    background:  ${ ({theme})=> theme.typeBoxText };
    border-radius: 30px;
}
.user{
    display:flex;
    width:50%;
    justify-content:center;
    margin-top:30px;
    margin-bottom:30px;
    padding:1rem;
    border-right: 2px solid
}
.result-graph, .table{
    width:1000px;
    margin:auto;
}
.total-times{
    width:50%;
    padding:3rem;
}
.picture{
    position:relative;
    width:50%;
    min-height:5rem;
    min-width:5rem;
}
.info{
    width:50%;
    margin-top:1rem;
    text-align:center;
    padding:1rem;
    font-size:1.5rem;
}
.central-data{
    width:1000px;
    margin: auto;
    margin-top:2rem;
    margin-bottom: 3rem;
}
.total-times{
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:3rem;
}
.central-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
}
a{ 
    color: inherit; 
    text-decoration: none;      
} 
.mode:hover{
    color: ${ ({theme})=> theme.title };
    border-right-color: ${ ({theme})=> theme.typeBoxText };
    cursor: pointer;
}











.board {
    text-align: center;
}

.board .leaderboard{
    margin-bottom: 1em;
}

.board .duration{
    display: flex;
    justify-content: center;
    gap: 1em;
}

.board .duration > button{
    border: 1px solid var(--color-light);
    padding: .5em 2em;
    border-radius: 50px;
    background-color: transparent;
    cursor: pointer;
}

.board .duration > button:hover{
    background-color: var(--color-dark);
    color: var(--color-light);
}

.active{
    background-color: var(--color-dark);
    color: var(--color-light);
}

#profile{
    /* display: flex; */

    margin-top: 3em;
}

#profile .flex{
    display: flex;
    justify-content: space-between;
    gap: 1em;
    text-align: left;
    margin-bottom: 2em;
}

#profile .flex .item{
    display: flex;
    align-items: center;
}

#profile .flex img{
    width: 20%;
    border-radius: 50%;
}

#profile .flex .info{
   padding: 1em;
}

.text-dark{
    color: var(--color-dark);
}



  
`;