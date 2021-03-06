import { doc } from "prettier";
import { START_PAGE_STYLES } from "./appSettings.js";
import { fillLeaderboard } from './fillLeaderboard';
import { checkLocalStorage } from '../service/rankingService'

export const showStartingPage = () => {
    const appScreen = document.querySelector('#pokequiz-app');
    appScreen.classList.add(START_PAGE_STYLES.startPageClass)
    
    // render starting page
    const startingPageTemplate =  document.querySelector('#starting-page-template');
    appScreen.innerHTML = startingPageTemplate.innerHTML;

    // add help modal 
    const helpScreenTemplate = document.querySelector('#help-modal-template'); 
    appScreen.innerHTML += helpScreenTemplate.innerHTML;

    // pikachuImage
    const pikachuSvgImage = document.querySelector('.replaceMe'); 
    pikachuSvgImage.id = 'pikachuImg';
    pikachuSvgImage.innerHTML = `
            <g id="face">
                <path fill="#FFCE06" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M635.6,194.2c-13.1,26.4-32.6,50.6-59,73c-2.6,41.6-5,83.4-19.7,118.2c-0.2,0.7-0.7,1.4-1,2.1c-9,19-26.9,33.3-53.7,33.5
                c-1,0-1.9,0-2.6,0c-62.5-0.2-116.5-19-158.1-44.5c-5.9-3.6-11.2-7.6-15.5-11.9c-14.5-14.3-19.7-31.9-17.8-51.6
                c3.1-33.3,26.6-72.3,60.4-111.7c-4.8-31.9-5-61.3-0.2-88c8.1-45.6,30.7-83.2,71.6-111c11.4,21.2,17.4,44.5,17.1,70.6
                c0,32.6-9.7,69.4-30,111c33.5-1,70.6,7.6,111.7,27.8c13.6-47.5,32.8-83.4,57.8-107.9c16.9-16.6,36.6-28.1,58.7-34
                C660.6,114.8,654.6,156.7,635.6,194.2z"/>
                <path fill="#3762AC" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M480.9,359.5c-3.6,4.8-7.8,8.3-12.6,11.2c-16.4,10-38.3,9.5-58.7-1.7c-7.6-4.3-15-10-21.9-17.4c-16.2-17.1-10.5-35.4,6.7-42.3
                c9.3-3.8,17.4-1.7,25.7,4.3c11.4,8.1,23.5,7.6,35.2,6.7C481.8,317.8,500.1,335,480.9,359.5z"/>
                <circle fill="#3762AC" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="518.4" cy="335.7" r="9.5"/>
                <circle fill="#3762AC" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="352.7" cy="291.5" r="9.5"/>
                <path fill="#D61E40" d="M347.7,335.7c0,15-9.5,27.3-21.9,29c-14.5-14.3-19.7-31.9-17.8-51.6c4.3-4,9.5-6.4,15.2-6.4
                C337,306.4,347.7,319.5,347.7,335.7z"/>
                <path fill="#D61E40" d="M556,387.3c-9,19-26.9,33.3-53.7,33.5c-1,0-1.9,0-2.6,0c-5-5.9-8.1-13.3-8.1-21.6c0-18.3,15-33.3,33.3-33.3
                C539.1,365.9,551.2,374.9,556,387.3z"/>
                <path fill="#D61E40" d="M468.3,368.4c0,0.2,0,0.2,0,0.5c-16.4,10-38.3,9.5-58.7-1.7c1-10.5,13.8-18.5,29.2-18.5
                C455.2,348.4,468.3,357.2,468.3,368.4z"/>
                <path fill="#3762AC" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M456.8,73c-33.3,4-62.8,18.1-88.9,40.4l0,0c8.1-45.6,30.7-83.2,71.6-111C451.1,23.5,457.1,46.8,456.8,73z"/>
                <path fill="#3762AC" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M635.6,194.2c-4.8-37.6-21.2-64.7-39.2-90.6c16.9-16.6,36.6-28.1,58.7-34C660.6,114.8,654.6,156.7,635.6,194.2z"/>
                <path fill="none" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M635.6,194.2c-13.1,26.4-32.6,50.6-59,73c-2.6,41.6-5,83.4-19.7,118.2c-0.2,0.7-0.7,1.4-1,2.1c-9,19-26.9,33.3-53.7,33.5
                c-1,0-1.9,0-2.6,0c-62.5-0.2-116.5-19-158.1-44.5c-5.9-3.6-11.2-7.6-15.5-11.9c-14.5-14.3-19.7-31.9-17.8-51.6
                c3.1-33.3,26.6-72.3,60.4-111.7c-4.8-31.9-5-61.3-0.2-88c8.1-45.6,30.7-83.2,71.6-111c11.4,21.2,17.4,44.5,17.1,70.6
                c0,32.6-9.7,69.4-30,111c33.5-1,70.6,7.6,111.7,27.8c13.6-47.5,32.8-83.4,57.8-107.9c16.9-16.6,36.6-28.1,58.7-34
                C660.6,114.8,654.6,156.7,635.6,194.2z"/>
            </g>
            <g id="mango">
                <path fill="#FFCE06" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M212,523.2c1,21.2,20.9,38.8,54.9,28.8c39.9-11.6,61.8-46.4,73.7-79.9c24.7-69.7,12.6-140.7-44.7-195.7
                c-42.1-40.4-93.2-39.7-129.3-4.3c-34.2,33.5-37.8,94.1-3.3,145C186.1,450.3,210.3,483.1,212,523.2z"/>
                <path fill="#3762AC" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M205.3,276.6c7.4-4.8,14.7-7.6,23.1-6.9"/>
                <path fill="#3762AC" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M213.2,269.3c0,0-0.5-1.4-1.4-4c-0.7-2.6-1.9-6.4-3.1-10.9c-0.5-2.4-1.2-4.8-1.7-7.4s-1-5.5-1.4-8.6c0-3.1-0.5-6.4,0.2-10.2
                c0.2-1,0.7-2.1,1-3.1l1.2-2.4l0.5-1l0.7-1.2c0.5-0.7,1-1.7,1.7-2.4c2.1-2.9,4.5-5.2,7.1-7.4c2.6-2.1,5.2-4,8.1-5.5
                c2.6-1.7,5.5-2.9,7.8-4c2.6-1.2,5-2.1,7.4-2.9c2.4-0.7,4.5-1.4,6.2-2.1c1.9-0.5,3.6-1,4.8-1.4c2.6-0.7,4.3-1,4.3-1
                c3.6-1,7.1,1.2,7.8,4.8c1,3.6-1.2,7.1-4.8,7.8c-0.2,0-0.2,0-0.5,0h-0.2c0,0-1.4,0.2-4,0.7c-1.2,0.2-2.9,0.5-4.5,1
                c-1.7,0.5-3.8,0.7-5.7,1.4c-2.1,0.5-4.3,1.2-6.7,2.1c-2.4,0.7-4.8,1.7-7.1,2.9c-2.4,1.2-4.8,2.4-6.9,4c-2.1,1.4-4.3,3.3-5.9,5.2
                c-0.5,0.5-0.7,1-1.2,1.4l-0.5,0.7l-0.7,1l-0.5,1.2l-0.2,0.5l-0.2,0.2v0.2l0,0c0,0-0.2,0.2,0-0.2l0,0c-0.2,0.5-0.2,0.7-0.5,1.2
                c-0.7,2.1-0.7,5-0.7,7.6c0,2.6,0.2,5.5,0.7,7.8c0.2,2.6,0.7,5,1,7.1c0.7,4.5,1.7,8.1,2.1,10.7c0.7,2.6,1,4,1,4l0,0
                c0.2,1.4-0.5,2.9-1.9,3.3C215.1,271.5,213.6,270.5,213.2,269.3z"/>
                <path id="leaf" fill="#237003" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M211.5,225.8c-25.4-10-66.6-0.7-85.3,9.7c-19.5,10.9-42.6,46.1-43.5,66.6c-1.7,34,11.4,100.3,31.4,132.2c-5.2-25.9-9-68.7-7.1-80.4
                c-3.3-34.7,29.2-82.5,48.3-104.4C165.1,238.2,189.4,215.4,211.5,225.8z"/>
            </g>
            <g id="body">
                <path fill="#FFCE06" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M465.6,579.1c-5.9,2.9-12.6,5-20,6.9C390,600,338,593.4,294,558c0,0-12.4,2.1-15.5-0.2c-7.8-5.7-13.3-40.4-9-55.2
                c1.7-5.9,18.5,7.6,20.7,15.9c9.3-27.1,19.7-53.7,41.8-68.5c6.7-4.5,12.1-10.5,8.8-15.9c-11.2-17.8-31.4-25.9-36.4-47.5
                c-4.5-19.3,1.4-25.9,17.8-17.8c28.1,13.8,55.2,27.6,80.6,35.9c35.4,11.6,69.2,16.9,99.8,15.9c5.7,13.3,9.5,27.1,11.4,41.8
                c1.9,14.3,1.9,29.2-0.2,44.9c-0.5,4.3-1.4,8.8-2.1,13.1c-0.7,3.8-1.9,7.6-3.1,11.2c-0.7,1.9-1.4,3.8-2.1,5.7"/>
                <path fill="#3762AC" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M513.4,507.6c-16.6-2.1-37.6-3.8-59.7-13.1c-23.8-10-17.1-36.1,10.7-35.2c14.7,0.7,30.7,2.6,49.4,3.3
                C515.6,476.9,515.3,491.9,513.4,507.6z"/>
                <path fill="#3762AC" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M508.2,531.8c-5.2,15.7-14.5,29.2-29,39.5l0,0c0,0-36.8-16.2-46.4-25.7c-20.9-20.7-6.7-39.5,23.3-32.1
                C469.4,516.8,508.2,531.8,508.2,531.8z"/>
            </g>
            <g id="tail">
                <path fill="#FFCE06" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M726.9,501.4l-66.6,2.4l-29.7,51.1c-25.2-1-49.2-2.1-72.5-3.1c-1.2,2.4-2.4,4.5-3.3,6.7c-10.2,20-17.8,30.2-23.3,33
                c-28.1-2.1-50.4-6.2-65.9-12.6c5-2.4,9.5-4.8,13.6-7.6l0,0c12.8-9,21.4-20.4,26.9-34l7.1,1.9c1.7-5,3.6-9.7,5.5-14.5
                c6.7-17.4,14-33.3,23.8-45.4c8.1-5.2,25.9-4.5,44.7-3.1c7.6-26.9,18.5-73.2,23.8-78.5c11.4-16.4,103.9-41.6,147.4-35.7
                C764.2,393.2,754.2,439.3,726.9,501.4z"/>
                <path fill="#3762AC" stroke="#3762AC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M554.8,558.7c-10.2,20-17.8,30.2-23.3,33c-28.1-2.1-50.4-6.2-65.9-12.6c5-2.4,9.5-4.8,13.6-7.6l0,0c12.8-9,21.4-20.4,26.9-34
                l7.1,1.9c1.7-5,3.6-9.7,5.5-14.5h4.5v4.8h7.8l1,7.4h10.9v12.8h8.6L554.8,558.7z"/>
            </g>
            <g id="heart">
                <path id="heart4" fill="#D61E40" d="M518.9,78.9c-12.1-21.4-32.3-25.9-38.5,0c-3.3,14.3,5.7,27.8,16.2,39.2
                c6.7,7.1,15.2,8.8,25,4.8c19.3-7.8,34.9-19,34.5-34.5C555.3,65.4,537.2,68.5,518.9,78.9z"/>
                <path id="heart3" display="none" fill="#D61E40" d="M508.9,123.1c-7.6-13.4-20.2-16.2-24.1,0c-2.1,8.9,3.6,17.4,10.1,24.5
                c4.2,4.5,9.5,5.5,15.6,3c12.1-4.9,21.9-11.9,21.6-21.6C531.6,114.6,520.3,116.5,508.9,123.1z"/>
                <path id="heart2" display="none" fill="#D61E40" d="M500.9,145.3c-5.7-10-15.2-12.2-18.1,0c-1.6,6.7,2.7,13.1,7.6,18.4
                c3.1,3.3,7.1,4.1,11.7,2.2c9-3.7,16.4-8.9,16.2-16.2C518,138.9,509.5,140.4,500.9,145.3z"/>
                <path id="heart1" display="none" fill="#D61E40" d="M490.4,163.7c-3.8-6.7-10.1-8.1-12.1,0c-1,4.5,1.8,8.7,5.1,12.3
                c2.1,2.2,4.8,2.8,7.8,1.5c6-2.5,10.9-6,10.8-10.8C501.8,159.5,496.2,160.4,490.4,163.7z"/>
            </g>
    `;

    appScreen.innerHTML += pikachuSvgImage.innerHTML;

    // add leaderboard modal
    const leaderboardTemplate = document.querySelector('#leaderboard-modal-template');
    appScreen.innerHTML += leaderboardTemplate.innerHTML;
    fillLeaderboard(checkLocalStorage());
    
}