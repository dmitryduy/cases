import React from 'react';
import { Profile, ProfileBalance, ProfileImage, ProfileName } from "./ProfileInfo.styles";

const ProfileInfo = () => {
    return (
        <Profile>
            <ProfileImage src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg' alt='profile image'/>
            <div style={{margin: 'auto 0'}}>
                <ProfileName>Tester</ProfileName>
                <ProfileBalance>345.0 P</ProfileBalance>
            </div>
        </Profile>
    );
};

export default ProfileInfo;
