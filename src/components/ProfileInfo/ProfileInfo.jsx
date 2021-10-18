import React from 'react';
import { Profile, ProfileBalance, ProfileImage, ProfileName } from "./ProfileInfo.styles";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
    const totalMoney = useSelector(({profile}) => profile.totalMoney);
    localStorage.setItem('totalMoney', totalMoney)
    return (
        <Profile>
            <ProfileImage src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg' alt='profile image'/>
            <div style={{margin: 'auto 0'}}>
                <ProfileName>Tester</ProfileName>
                <ProfileBalance>{totalMoney} P</ProfileBalance>
            </div>
        </Profile>
    );
};

export default ProfileInfo;
