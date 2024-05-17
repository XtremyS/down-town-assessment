import React from "react";
import "./NotificationSection.css";

const NotificationSection: React.FC = () => {
  return (
    <div className="notification-section-container">
      {/* BELL ICON */}
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="#65B9C6"
          />
          <path
            d="M25.3645 13.1306V13.7408L25.358 13.7368C25.3516 13.7868 25.3459 13.8369 25.3386 13.8869C25.1702 15.0282 24.5915 15.8961 23.6025 16.4907C23.5298 16.5343 23.4524 16.5715 23.3773 16.6134L23.3055 16.6441C23.1203 16.7276 22.929 16.7967 22.7332 16.8507L22.6985 16.8572C22.2045 16.9818 21.6893 16.998 21.1884 16.9046C20.6876 16.8111 20.2129 16.6103 19.797 16.316C19.3812 16.0216 19.034 15.6406 18.7794 15.1993C18.5248 14.758 18.3688 14.2667 18.3222 13.7594C18.2318 12.7246 18.5457 11.8222 19.2399 11.0458C19.3843 10.8901 19.5414 10.7467 19.7096 10.6172L19.8662 10.5082C20.0041 10.4166 20.1472 10.3331 20.2948 10.258C20.3086 10.2534 20.3221 10.2481 20.3352 10.2418C20.847 10.0015 21.4091 9.88766 21.9742 9.91C22.5392 9.93233 23.0906 10.0902 23.5819 10.3702C24.0731 10.6502 24.4899 11.0442 24.7971 11.519C25.1042 11.9938 25.2927 12.5354 25.3467 13.0983C25.3499 13.1096 25.3443 13.129 25.3645 13.1306Z"
            fill="white"
          />
          <path
            d="M19.9268 9.49362C19.7436 9.58628 19.566 9.6895 19.3948 9.80275L19.2003 9.93835C19.1527 9.90526 19.1067 9.87055 19.0591 9.83908C18.6675 9.58096 18.2484 9.3671 17.8096 9.20143C17.6789 9.1522 17.6579 9.11184 17.6813 8.97543C17.7274 8.73238 17.7401 8.48419 17.7192 8.2377C17.6812 7.8012 17.5067 7.38776 17.2204 7.05605C16.8168 6.59032 16.3075 6.35141 15.6804 6.40145C15.4163 6.42276 15.1608 6.5057 14.9346 6.6436C14.619 6.83353 14.362 7.10699 14.192 7.43379C14.0239 7.74455 13.9367 8.09263 13.9386 8.44595C13.9417 8.64613 13.962 8.84568 13.9991 9.04243C14.0193 9.15785 13.9991 9.1982 13.8893 9.2434C12.9165 9.6357 12.0481 10.2485 11.3525 11.0336C11.0814 11.3308 10.8327 11.6475 10.6083 11.9812C10.2927 12.4474 10.019 12.9406 9.79065 13.4551C9.53602 14.0312 9.33264 14.6287 9.18287 15.2405C9.05238 15.7692 8.95959 16.3065 8.90521 16.8483C8.87293 17.1712 8.85194 17.494 8.84468 17.8169C8.83822 18.1268 8.84414 18.4368 8.86243 18.7467C8.86915 19.0549 8.85079 19.3632 8.80755 19.6685C8.75966 20.1291 8.69105 20.5865 8.60172 21.0406C8.52747 21.4216 8.4403 21.7993 8.3386 22.1706C8.31842 22.2449 8.32165 22.2513 8.3959 22.2513H8.41205C13.3316 22.2457 18.2519 22.2642 23.1723 22.2424C23.2845 22.2424 23.2837 22.2424 23.253 22.1311C23.1372 21.662 23.0507 21.1862 22.9939 20.7065C22.9584 20.4038 22.9334 20.1003 22.9229 19.796C22.9132 19.5159 22.91 19.231 22.9229 18.9533C22.9301 18.7806 22.9374 18.6079 22.9463 18.4352C22.9612 18.1814 22.9612 17.927 22.9463 17.6732C23.1894 17.6063 23.4268 17.5205 23.6566 17.4165L23.7462 17.3786C23.7617 17.5001 23.7685 17.6226 23.7663 17.745C23.7768 18.1486 23.7566 18.5522 23.7397 18.9501C23.723 19.3484 23.7297 19.7472 23.7599 20.1447C23.7873 20.495 23.8285 20.8437 23.889 21.194C23.9496 21.5443 24.0206 21.8623 24.1118 22.1916C24.1128 22.2 24.1154 22.2081 24.1196 22.2154C24.1238 22.2227 24.1294 22.2291 24.1361 22.2342C24.1428 22.2394 24.1504 22.2431 24.1586 22.2452C24.1668 22.2473 24.1753 22.2477 24.1836 22.2465C24.2369 22.2465 24.291 22.2537 24.3451 22.2554C24.5244 22.2626 24.6942 22.3377 24.8203 22.4653C24.9465 22.5929 25.0195 22.7637 25.0247 22.943C25.0247 23.0996 25.0247 23.257 25.0247 23.4136C25.0253 23.5152 25.0017 23.6156 24.9558 23.7062C24.9099 23.7969 24.843 23.8754 24.7607 23.935C24.6156 24.0447 24.4373 24.1017 24.2555 24.0965H19.2907C19.2431 24.0965 19.21 24.1013 19.1939 24.1562C19.0086 24.7071 18.6663 25.1919 18.2092 25.5509C17.6305 26.0201 16.9246 26.3051 16.1824 26.3694C16.1647 26.3694 16.1453 26.3694 16.1364 26.3904H15.4326C15.4229 26.371 15.4043 26.371 15.3866 26.3694C15.2572 26.3592 15.1286 26.3408 15.0016 26.3145C14.2243 26.1579 13.5487 25.8157 13.0007 25.2305C12.7148 24.9256 12.4979 24.5628 12.3646 24.1667C12.3601 24.1442 12.3471 24.1242 12.3284 24.111C12.3096 24.0978 12.2864 24.0923 12.2637 24.0956C11.865 24.0956 11.4671 24.0956 11.0684 24.0956C9.83074 24.0956 8.59554 24.0956 7.36276 24.0956C7.20268 24.0974 7.04656 24.0458 6.919 23.9491C6.79143 23.8523 6.69966 23.7159 6.65812 23.5613C6.65328 23.546 6.65167 23.529 6.63391 23.5218V22.851C6.65651 22.8413 6.65409 22.8187 6.65812 22.8002C6.68891 22.6465 6.77508 22.5095 6.90027 22.4152C7.04336 22.3021 7.22259 22.2448 7.40473 22.2537C7.4467 22.2537 7.47576 22.2465 7.48545 22.1989C7.62646 21.7064 7.74177 21.2069 7.8309 20.7024C7.90274 20.2988 7.96005 19.8953 8.0004 19.4917C8.02987 19.2701 8.04523 19.0469 8.04641 18.8234C8.04157 18.6829 8.02785 18.5433 8.02704 18.4029C8.02704 18.1341 8.02058 17.8661 8.0335 17.5957C8.04157 17.4303 8.04803 17.264 8.06094 17.0993C8.08838 16.7447 8.13062 16.3923 8.18766 16.042C8.32234 15.2011 8.54778 14.3773 8.86001 13.585C9.0922 12.9957 9.37693 12.4284 9.71074 11.89C10.1751 11.1327 10.7484 10.4479 11.4122 9.85764C11.9065 9.41894 12.4573 9.0484 13.0499 8.75589C13.0748 8.74684 13.0957 8.72939 13.1091 8.70656C13.1225 8.68372 13.1276 8.65693 13.1233 8.63078C13.1018 8.23342 13.1611 7.83581 13.2977 7.46204C13.4644 6.98626 13.755 6.56358 14.1395 6.2376C14.5345 5.89956 15.0223 5.68858 15.5391 5.63225C15.5553 5.63225 15.5714 5.63225 15.5795 5.61126H16.088C16.0985 5.63386 16.1203 5.63063 16.1396 5.63305C16.4468 5.66958 16.7447 5.76205 17.0186 5.90587C17.3069 6.0562 17.566 6.25683 17.7838 6.49831C18.0045 6.73964 18.1817 7.01736 18.3076 7.31917C18.4737 7.71684 18.5506 8.1461 18.5328 8.5767C18.5288 8.60211 18.5341 8.62813 18.5477 8.64993C18.5614 8.67174 18.5825 8.68788 18.6071 8.69535C18.9522 8.85179 19.2828 9.03842 19.595 9.25309C19.712 9.32403 19.823 9.40448 19.9268 9.49362ZM13.2743 24.0956C13.2008 24.0956 13.1992 24.0956 13.2315 24.1618C13.4621 24.6242 13.8338 25.0013 14.2929 25.2386C14.9268 25.5872 15.6642 25.6988 16.3729 25.5533C17.0477 25.4242 17.6264 25.1191 18.0631 24.5751C18.1668 24.4452 18.2549 24.3035 18.3254 24.153C18.348 24.1053 18.3423 24.0973 18.2899 24.0956H13.2743ZM7.50643 23.0246C7.47253 23.0246 7.45639 23.0399 7.45639 23.0738C7.45639 23.1077 7.45639 23.1642 7.45639 23.2094C7.45639 23.3168 7.45639 23.3168 7.56616 23.3168H24.044C24.0817 23.316 24.1195 23.3176 24.157 23.3216C24.1957 23.3256 24.2103 23.3103 24.2103 23.274C24.2103 23.2255 24.2103 23.1763 24.2103 23.1279C24.2103 23.0238 24.2103 23.0238 24.1086 23.0238L7.50643 23.0246Z"
            fill="white"
          />
          <path
            d="M17.4585 8.49357C17.4585 8.6211 17.4456 8.7575 17.4351 8.89714C17.4339 8.91753 17.4282 8.9374 17.4185 8.95538C17.4088 8.97335 17.3953 8.98899 17.3789 9.00121C17.3626 9.01343 17.3437 9.02193 17.3237 9.02612C17.3037 9.03031 17.2831 9.03009 17.2632 9.02548C16.973 8.96355 16.6799 8.91641 16.385 8.88423C16.152 8.86136 15.9176 8.85461 15.6836 8.86405C15.2629 8.89186 14.8452 8.95476 14.435 9.05211C14.3171 9.07794 14.2461 9.0279 14.238 8.90925C14.2275 8.75427 14.213 8.60011 14.2146 8.44514C14.2106 8.18086 14.2625 7.91872 14.3668 7.67586C14.4711 7.43301 14.6255 7.21492 14.82 7.03587C15.084 6.78363 15.4339 6.64111 15.799 6.63714C16.3931 6.62826 16.8297 6.90834 17.147 7.38859C17.362 7.71611 17.4708 8.10197 17.4585 8.49357ZM16.5464 8.11905C16.5973 8.1247 16.5965 8.09726 16.5836 8.06255C16.5236 7.87035 16.4119 7.69834 16.2607 7.56535C16.1531 7.47313 16.0183 7.41857 15.8768 7.40997C15.7354 7.40138 15.595 7.43922 15.477 7.51773C15.2871 7.64956 15.1486 7.84285 15.0847 8.06497C15.0637 8.12712 15.0718 8.136 15.1388 8.13116H15.1711C15.3317 8.10997 15.4934 8.09757 15.6554 8.09403C15.9526 8.08092 16.2504 8.08928 16.5464 8.11905Z"
            fill="white"
          />
          <path
            d="M14.255 10.5009C14.2577 10.5264 14.2518 10.552 14.2382 10.5737C14.2245 10.5954 14.204 10.6118 14.1799 10.6204C13.8755 10.7631 13.5867 10.9368 13.3179 11.1386C13.129 11.2782 12.949 11.4275 12.7747 11.5849C12.4583 11.8701 12.1722 12.1871 11.9207 12.5309C11.4482 13.1739 11.138 13.9215 11.0167 14.7102C11.0078 14.7675 11.0006 14.8248 10.9933 14.8813C10.9926 14.9017 10.9874 14.9216 10.9781 14.9397C10.9689 14.9579 10.9557 14.9737 10.9396 14.9862C10.9235 14.9987 10.9049 15.0075 10.885 15.0119C10.8651 15.0164 10.8445 15.0165 10.8246 15.0121C10.6632 14.9935 10.509 14.9757 10.3508 14.9628C10.22 14.9515 10.1748 14.8991 10.1894 14.7707C10.2791 14.085 10.4912 13.4209 10.8157 12.8102C11.0396 12.3853 11.313 11.9884 11.6301 11.6277C12.1397 11.0467 12.7363 10.5481 13.3986 10.1498C13.5293 10.0714 13.664 9.99971 13.8022 9.93513C13.9127 9.88347 13.9757 9.90607 14.0314 10.0158C14.0986 10.1477 14.1662 10.2792 14.234 10.4105C14.2497 10.438 14.257 10.4694 14.255 10.5009Z"
            fill="white"
          />
        </svg>
      </div>
      {/* PROFILE ICON */}
      <div>
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.3873 25.6127 0 16.5 0C7.3873 0 0 7.3873 0 16.5C0 25.6127 7.3873 33 16.5 33Z"
            fill="#65B9C6"
          />
          <path
            d="M16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.3873 25.6127 0 16.5 0C7.3873 0 0 7.3873 0 16.5C0 25.6127 7.3873 33 16.5 33Z"
            fill="#65B9C6"
          />
          <path
            d="M16.4664 24.4736C13.2971 24.4736 10.1275 24.4736 6.95775 24.4736C6.81498 24.4736 6.75627 24.4668 6.77234 24.2833C6.8873 23.1844 7.31437 22.2165 7.99298 21.355C9.13513 19.9075 10.6506 18.9996 12.37 18.4125C13.2872 18.0998 14.2389 17.8997 15.2044 17.8167C15.7792 17.7586 16.3574 17.739 16.9349 17.7579C17.5335 17.7858 18.1301 17.8477 18.7217 17.9434C19.707 18.1014 20.6679 18.3856 21.5807 18.7888C22.4716 19.1753 23.2977 19.6964 24.0301 20.334C24.7006 20.915 25.2547 21.618 25.6629 22.4057C25.9431 22.9713 26.1285 23.5791 26.2118 24.2048C26.2513 24.4687 26.2383 24.4761 25.9751 24.4761L16.4664 24.4736Z"
            fill="white"
          />
          <path
            d="M11.6728 12.2184C11.7118 10.6535 12.247 9.29937 13.4089 8.22459C14.1022 7.56874 14.988 7.15316 15.9355 7.03917C17.5115 6.84696 18.8403 7.36674 19.9275 8.49653C20.6956 9.29208 21.184 10.3161 21.3187 11.4137C21.5214 12.9378 21.2025 14.3445 20.2569 15.5744C19.4781 16.588 18.4608 17.2332 17.1796 17.4125C15.7118 17.6183 14.4417 17.1856 13.3601 16.1856C12.4683 15.3606 11.959 14.3315 11.7476 13.1418C11.6915 12.8373 11.6664 12.5279 11.6728 12.2184Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotificationSection;