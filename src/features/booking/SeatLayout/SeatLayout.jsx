import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookingAction, bookingSelector,calculatePrice,remove,select } from "../../../store/reducer/BookingReducer";
import BookingSummary from "../BookingSumary/BookingSummary";
import styles from "./SeatLayout.module.css";
const SeatLayout = () => {
  const [length2, setLength2] = useState([1, 1]);
  const [length3, setLength3] = useState([1, 1, 1]);
  const [goldPlus, setGoldPlus] = useState(["A", "B", "C", "D", "E"]);
  const [length4, setLength4] = useState([1, 1, 1, 1]);
  const [silverPlus, setSilverPlus] = useState(["G", "F"]);
  const availableSeats=['F6','F7','F10','F3', 'F2','G1','G2', 'G6', 'G9', 'G10',"A1","C2","B5","D1"]
  const selectedSeats=useSelector(bookingSelector);

  const [length6, setLength6] = useState([1, 1, 1, 1, 1, 1]);
const dispatch = useDispatch()
  function selectSeat(seatNo) {
    if(selectedSeats.includes(seatNo)){
        dispatch(remove(seatNo))
    }else{
        dispatch(select(seatNo))
    }
    dispatch(calculatePrice())
  }
  return (
    <table><tbody>
    {
        silverPlus.map((r,i)=>
            <tr className={styles.seatRow} key={i}>
                <td>{r}</td>
                <td className={styles.seatCol}>
                {
                length4.map((item, i)=>
                    availableSeats.includes(r+(i+1)) ?
                    <button key={i} onClick={()=>{selectSeat(r+(i+1))}} 
                    className={
                        selectedSeats.includes(r+(i+1)) ? styles.selectedSeats
                            : styles.availableSeats
                        }>
                        <span className={styles.seatNo}>{r+(i+1)}</span>
                    </button> :
                    <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png" key={i}/>
                    )
                 }
                </td>
                <td className={styles.seatCol}>
                {
                length6.map((item, i)=>
                availableSeats.includes(r+(i+5)) ?
                <button onClick={()=>{selectSeat(r+(i+5))} }  key={i}
                    className={
                        selectedSeats.includes(r+(i+5)) ? styles.selectedSeats
                            : styles.availableSeats
                        }>
                        <span className={styles.seatNo}>{r+(i+5)}</span>
                    </button>  :
                <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png" key={i}/>
                    )
                }
                </td>
                <td className={styles.seatCol}>
                {
                length4.map((item, i)=>
                availableSeats.includes(r+(i+11)) ?
                <button onClick={()=>{selectSeat(r+(i+5))}} key={i}
                className={
                    selectedSeats.includes(r+(i+5)) ? styles.selectedSeats
                        : styles.availableSeats
                    }>
                    <span className={styles.seatNo}>{r+(i+5)}</span>
                </button>  :
                <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png" key={i}/>
                    )
                }
                </td>
                <td>{r}</td>
    </tr>
            )
    }</tbody>
    
</table>
      );
};

export default SeatLayout;


// <table>
// {
//     silverPlus.map(r=>
//         <tr className={styles.seatRow}>
//             <td>{r}</td>
//             <td className={styles.seatCol}>
//             {
//             length4.map((item, i)=>
//                 availableSeats.includes(r+(i+1)) ?
//                 <button onClick={()=>{selectSeat(r+(i+1))}} 
//                 className={
//                     selectedSeats.includes(r+(i+1)) ? styles.selectedSeats
//                         : styles.availableSeats
//                     }>
//                     <span className={styles.seatNo}>{r+(i+1)}</span>
//                 </button> :
//                 <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png">
//                 </img>   
//                 )
//              }
//             </td>
//             <td className={styles.seatCol}>
//             {
//             length6.map((item, i)=>
//             availableSeats.includes(r+(i+5)) ?
//             <button onClick={()=>{selectSeat(r+(i+5))}} 
//                 className={
//                     selectedSeats.includes(r+(i+5)) ? styles.selectedSeats
//                         : styles.availableSeats
//                     }>
//                     <span className={styles.seatNo}>{r+(i+5)}</span>
//                 </button>  :
//             <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png">
//             </img> 
//                 )
//             }
//             </td>
//             <td className={styles.seatCol}>
//             {
//             length4.map((item, i)=>
//             availableSeats.includes(r+(i+11)) ?
//             <button onClick={()=>{selectSeat(r+(i+5))}} 
//             className={
//                 selectedSeats.includes(r+(i+5)) ? styles.selectedSeats
//                     : styles.availableSeats
//                 }>
//                 <span className={styles.seatNo}>{r+(i+5)}</span>
//             </button>  :
//             <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png">
//             </img> 
//                 )
//             }
//             </td>
//             <td>{r}</td>
// </tr>
//         )
// }

// </table>
