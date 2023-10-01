import React, { useEffect, useState } from "react"
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { getAllChat ,getDetailChat,postChat} from "../../redux/actions/chatAction";

const Chat = () => {
  const dispatch = useDispatch()
  const [receiver,setReceiver] = useState({
    name:'',
    position:'',
    photo:''
  })
  const myId = localStorage.getItem('id');
  const {chats,chat} = useSelector((state)=> state.chat)
  const [message, setMessage] = useState(''); 
  console.log({chats,chat})

  useEffect(()=>{
    dispatch(getAllChat())
  },[])

  const showDetail = async (id,callback) => {
    await dispatch(getDetailChat(id))
    if (typeof callback === 'function') {
      callback();
    }
  }

  const handleChange = (event) => {
    setMessage(event.target.value); 
  }

  const postChatHandler = (id) => {
    dispatch(postChat(id,message))
    console.log({id,message})
  }

  const uniqueChats = {};
  chats?.forEach((chat) => {
    uniqueChats[chat.id] = chat;
  });
  const uniqueChatsArray = Object.values(uniqueChats);

  return (
    <div id="chat">
      <div className="nav-chat">
        <div className="header">Message</div>
        <div className="list-chat">

          {uniqueChatsArray?.map((chat)=>{
            const receiverPhoto = (chat) => {
              if (chat.user_photo) {
                return chat.user_photo
              } else if (!chat.user_photo) {
                return '/image/default-profile.png'
              } else if (chat.recruiter_photo) {
                return chat.recruiter_photo
              } else {
                return '/image/default-profile.png'
              }
            }
            return(
            <div className="receiver" key={chat.id} onClick={()=>{
              showDetail(chat.id,() => {
                setReceiver({
                  name: chat.user_name || chat.recruiter_name,
                  position: chat.message_position,
                  photo: receiverPhoto(chat)
                  // photo: chat.user_photo || chat.recruiter_photo==null ? '/image/default-profile.png' : chat.recruiter_photo
                })
              })
              }}>
              {/* <img src={chat.user_photo || chat.recruiter_photo==null ? '/image/default-profile.png' : chat.recruiter_photo} alt="" /> */}
              <img src={receiverPhoto(chat)} alt="" />
              <div className="receiver-info">
                <h4 className="receiver-name">{chat.user_name || chat.recruiter_name}</h4>
                <h5 className="receiver-job">{chat.message_position}</h5>
              </div>
            </div>
            )
          })}

        </div>

      </div>

      {!chat?.length==0 && (
      <div className="detail-chat">
        <div className="header">
          <div className="receiver-info">
            <img src={receiver.photo} alt="" />
            <h4 className="receiver-name">{receiver.name}</h4>
          </div>
          <h5 className="receiver-job">{receiver.position}</h5>
          <a href="" className="detail-profile">Detail Profile</a>
          <a href="" className="back">Back</a>
        </div>
        
        <div className="bouble-chat">
          {chat?.map((item)=> {
            return(
              <p className={item.sender_id == myId ? "bouble-chat-sender" : 'bouble-chat-receiver'} key={item.id}>{item.message_detail}</p>
            )
          })}

          {/* <p className="bouble-chat-receiver">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, ea deleniti magnam laborum quia, corporis quo natus, provident architecto dolorem inventore illum assumenda. Dolorem ratione sed quasi nemo eos nulla?
          </p> */}


        </div>
        

        <div className="form-chat">
          <input type="text" placeholder="Type Message..." onChange={(e)=>handleChange(e)} /> 
          <div className="send-btn" onClick={()=>postChatHandler(chat[0].form_message_id)} style={{backgroundImage:"url('/image/icon-send.svg')"}}></div>
        </div>
      </div>)}



    </div>
  )
};

export default Chat;
