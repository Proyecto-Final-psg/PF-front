import './UserAvatar.css'

export function UserAvatar(props){
    return <div>
        <div className="user-avatar">
            <img src={props.img} alt="" />
        </div>
    </div>
}