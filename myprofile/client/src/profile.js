import React from 'react';
import './profile.css';


function Profile() {
    return (
        <div className='backGround'>
            <div className='toyImage'>
                3D 이미지넣기
            </div>
            <div className='mainProfit'>
                <div className='mainImage'>
                    이미지
                </div>
                <div className='mainDesc'>
                    {/* <div className='basicPro'>
                        기본 프로필
                    </div> */}
                    <div className='description'>
                        Description
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
