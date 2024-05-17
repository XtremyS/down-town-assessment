import React from "react";
import "./BottomNav.css";

const BottomNav: React.FC = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <div>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.43581 17.5239V13.7049C2.43581 13.5673 2.43581 13.5678 2.30125 13.567C1.84409 13.5631 1.40308 13.485 0.989377 13.2813C0.637241 13.1082 0.344444 12.8672 0.15779 12.5156C-0.111884 12.0055 -0.0319293 11.4423 0.367288 11.0009C1.91903 9.28287 3.47058 7.56468 5.02195 5.8463C6.5332 4.17201 8.04473 2.49771 9.55653 0.823425C9.94266 0.395923 10.4285 0.147849 10.9899 0.0476705C11.6058 -0.0619955 12.1984 0.015859 12.7597 0.298814C13.0345 0.440033 13.2802 0.631827 13.4841 0.864166C14.5084 2.00194 15.5338 3.1386 16.5605 4.27414C18.3779 6.28663 20.1952 8.29922 22.0125 10.3119C22.2216 10.5439 22.431 10.7757 22.6407 11.0073C23.1252 11.5445 23.1193 12.287 22.6304 12.8211C22.2936 13.1889 21.8668 13.3873 21.3904 13.4942C21.145 13.5479 20.8941 13.5719 20.643 13.5656C20.5781 13.5656 20.5625 13.584 20.5627 13.6474C20.5642 16.1912 20.5647 18.7349 20.5641 21.2785C20.5641 21.5517 20.5104 21.8129 20.3791 22.0531C20.0479 22.659 19.5331 22.988 18.8469 22.9944C17.4476 23.0075 16.0482 22.9983 14.6489 22.9983C14.051 22.9983 13.5885 22.5356 13.5883 21.9348C13.5883 20.6752 13.5883 19.4155 13.5883 18.1557V17.2627C13.5883 16.9418 13.3682 16.7177 13.0467 16.7158C12.679 16.7136 12.3115 16.7158 11.944 16.7158C11.2842 16.7158 10.6244 16.7158 9.96467 16.7158C9.68162 16.7158 9.46906 16.8852 9.42058 17.1464C9.41425 17.1857 9.41155 17.2256 9.4125 17.2655C9.4125 18.82 9.4125 20.3746 9.4125 21.9292C9.4125 22.4444 9.07374 22.8699 8.58008 22.9746C8.51296 22.9889 8.44452 22.9962 8.37588 22.9963C6.96789 22.9974 5.55981 22.9974 4.15164 22.9963C3.69771 22.9946 3.26284 22.8134 2.94158 22.4922C2.62032 22.171 2.43865 21.7357 2.43609 21.281C2.43516 20.0294 2.43507 18.777 2.43581 17.5239ZM14.638 21.9496H18.782C18.8099 21.9496 18.8397 21.9496 18.8684 21.9471C19.0444 21.9367 19.2098 21.8592 19.3306 21.7305C19.4514 21.6018 19.5185 21.4317 19.518 21.2551C19.5134 18.3697 19.512 15.4844 19.5138 12.5993C19.5138 12.5329 19.5294 12.5136 19.5974 12.5156C19.9716 12.5192 20.3457 12.5217 20.7199 12.5156C20.8834 12.5126 21.0465 12.4978 21.2079 12.4712C21.4166 12.4369 21.6175 12.371 21.7824 12.2295C21.9713 12.0671 21.9819 11.8489 21.8142 11.6628L18.6525 8.15877C16.6735 5.96712 14.6948 3.77501 12.7163 1.58244C12.433 1.26767 12.0903 1.08517 11.6724 1.0489C11.1531 1.00341 10.6915 1.13847 10.3313 1.53388C9.75823 2.16258 9.18908 2.79574 8.61992 3.42722C7.3815 4.79847 6.14336 6.1699 4.9055 7.54151L1.183 11.6656C1.01863 11.8475 1.03172 12.068 1.21615 12.2279C1.24812 12.2551 1.28232 12.2797 1.31839 12.3012C1.51376 12.4171 1.73412 12.4841 1.96082 12.4966C2.24108 12.5144 2.52245 12.5128 2.80355 12.5164C3.01165 12.5192 3.21976 12.5178 3.42786 12.5164C3.46993 12.5164 3.49055 12.5273 3.48581 12.5722C3.4847 12.5921 3.4847 12.612 3.48581 12.6319C3.48581 15.5061 3.48581 18.3803 3.48581 21.2545C3.48452 21.3098 3.48901 21.3651 3.49918 21.4194C3.56799 21.7398 3.85076 21.9496 4.21042 21.9496C5.56956 21.9496 6.92898 21.9496 8.28868 21.9496H8.36362V21.8547C8.36362 20.3107 8.36362 18.7672 8.36362 17.2242C8.36362 16.3742 9.07068 15.668 9.91842 15.6682H13.0665C13.2729 15.6677 13.4774 15.708 13.6683 15.787C13.8591 15.8659 14.0324 15.9819 14.1783 16.1282C14.3243 16.2745 14.4398 16.4482 14.5184 16.6394C14.597 16.8307 14.6371 17.0356 14.6363 17.2423C14.6363 18.7793 14.6363 20.3163 14.6363 21.8531L14.638 21.9496Z"
              fill="#65B9C6"
            />
          </svg>
        </div>
        <p>Home</p>
      </div>
      <div className="nav-item">
        <i className="fas fa-heart"></i>
        <p>Care</p>
      </div>
      <div className="nav-item">
        <div>
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.02784L2.93131 2.52722C4.87161 2.02659 6.81643 1.52172 8.74323 1.02534C8.88049 0.991554 9.02465 0.991554 9.1619 1.02534L16.7836 2.9642C16.9637 3.01087 17.0042 3.07875 16.9997 3.24421C16.9997 5.84492 16.9997 8.44563 16.9997 11.0506C16.9725 11.7972 16.7498 12.526 16.3514 13.1719C15.7494 14.2148 14.9914 15.1707 14.1005 16.0102C12.6028 17.4618 10.9595 18.7732 9.19342 19.9261C9.08987 19.9982 9.01334 20.0364 8.88279 19.9515C6.58672 18.4916 4.51967 16.735 2.74223 14.7331C1.98676 13.9114 1.43743 12.9399 1.13506 11.8906C1.05002 11.5441 1.00624 11.1898 1.0045 10.8342C1.0045 8.33108 1.0045 5.82795 1.0045 3.32058L1 3.02784Z"
              stroke="#484848"
              stroke-width="1.2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M14.355 7.0976C14.124 7.00263 13.8624 6.97601 13.6116 7.02195C13.3608 7.0679 13.1352 7.18379 12.9704 7.35128L7.66821 11.6921C7.5926 11.6156 7.53117 11.5471 7.46501 11.4867C6.63802 10.7901 5.81103 10.0935 4.97931 9.40491C4.87441 9.30745 4.74732 9.2292 4.60578 9.17493C4.46425 9.12066 4.31123 9.09151 4.15605 9.08925C4.00087 9.08699 3.84677 9.11167 3.70314 9.16178C3.55952 9.2119 3.42936 9.2864 3.32061 9.38075C3.21381 9.47413 3.13039 9.58502 3.07541 9.7067C3.02044 9.82838 2.99505 9.95831 3.0008 10.0886C3.00654 10.2189 3.0433 10.3468 3.10883 10.4647C3.17437 10.5825 3.26732 10.6877 3.38204 10.774C4.5288 11.7458 5.68186 12.7122 6.84122 13.6732C6.94678 13.7759 7.07685 13.8581 7.22273 13.9145C7.36862 13.9708 7.52694 14 7.68711 14C7.84728 14 8.00561 13.9708 8.15149 13.9145C8.29737 13.8581 8.42744 13.7759 8.533 13.6732L12.8286 10.1579C13.4335 9.6586 14.0478 9.17136 14.6385 8.66399C14.7738 8.55792 14.8763 8.42511 14.9371 8.27729C14.9978 8.12946 15.0149 7.97117 14.9869 7.81638C14.9589 7.66158 14.8866 7.51505 14.7764 7.38969C14.6662 7.26434 14.5215 7.16402 14.355 7.0976Z"
              fill="#484848"
            />
          </svg>
        </div>
        <p>Coverage</p>
      </div>
      <div className="nav-item">
        <div>
          <svg
            width="21"
            height="25"
            viewBox="0 0 21 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4671 6.74451C15.5424 6.74451 14.6178 6.74451 13.6945 6.74451C12.9256 6.74451 12.4867 6.30376 12.4852 5.53638C12.4852 4.38579 12.4852 3.23472 12.4852 2.08318V1.76224C12.3705 1.76224 12.2799 1.74941 12.1907 1.74941C9.18311 1.74941 6.17551 1.75939 3.16791 1.74941C2.98018 1.73988 2.79255 1.76997 2.61704 1.83774C2.44153 1.9055 2.28201 2.00946 2.1487 2.14293C2.01539 2.27641 1.91123 2.43647 1.8429 2.61285C1.77457 2.78924 1.74358 2.97805 1.7519 3.16721C1.77031 8.87263 1.76181 14.5781 1.76323 20.2835C1.74869 20.5739 1.83586 20.8602 2.00951 21.0925C2.18316 21.3248 2.43227 21.4882 2.71337 21.5544C2.83569 21.5808 2.96073 21.5923 3.08578 21.5886H9.94209C10.017 21.5814 10.0924 21.5814 10.1672 21.5886C10.2592 21.6 10.3438 21.6448 10.4052 21.7147C10.4666 21.7846 10.5005 21.8747 10.5005 21.968C10.5005 22.0613 10.4666 22.1514 10.4052 22.2213C10.3438 22.2912 10.2592 22.336 10.1672 22.3474C10.1004 22.3539 10.033 22.3539 9.96616 22.3474H3.09003C1.86235 22.3431 1 21.4731 1 20.2378C1 14.5324 1 8.82699 1 3.12156C1 1.86494 1.8312 1.00628 3.07162 1.00342C6.29729 0.997718 9.52295 0.999144 12.7486 1.0077C12.9195 1.01507 13.0824 1.08272 13.2088 1.19883C14.8136 2.7935 16.4057 4.3972 17.985 6.00993C18.1056 6.14356 18.1753 6.31587 18.1818 6.49632C18.1946 8.98389 18.1903 11.4715 18.1903 13.959C18.1949 14.0354 18.1902 14.112 18.1762 14.1872C18.1695 14.2337 18.1536 14.2783 18.1296 14.3185C18.1056 14.3587 18.0739 14.3937 18.0364 14.4214C17.9988 14.4491 17.9561 14.4691 17.9109 14.4801C17.8656 14.491 17.8186 14.4928 17.7726 14.4853C17.6827 14.4831 17.5972 14.4457 17.5343 14.3809C17.4713 14.3162 17.4359 14.2293 17.4356 14.1387C17.4214 13.9961 17.4356 13.8349 17.4356 13.6823V6.74451H16.4671ZM13.2485 2.38699C13.241 2.43422 13.2363 2.48185 13.2343 2.52962C13.2343 3.51857 13.2343 4.50703 13.2343 5.49502C13.2343 5.86159 13.3533 5.97713 13.7158 5.97855H16.8239L13.2485 2.38699Z"
              fill="#484848"
            />
            <path
              d="M10.7393 17.1355C10.7393 16.8645 10.7237 16.5935 10.7393 16.3239C10.7634 15.9887 10.8937 15.8789 11.2307 15.896C11.9472 15.9203 12.6566 15.896 13.3462 15.6664C13.9839 15.4585 14.5549 15.0828 15.0001 14.5781C15.2054 14.3498 15.4419 14.3213 15.6274 14.531C16.5662 15.5993 17.7854 15.9302 19.1433 15.8974C19.8711 15.8803 19.9094 15.8974 19.9533 16.6391C20.1487 19.934 18.5089 22.5614 15.6684 23.885C15.5676 23.9353 15.4567 23.9615 15.3442 23.9615C15.2317 23.9615 15.1207 23.9353 15.0199 23.885C12.3281 22.7111 10.694 20.1537 10.7393 17.1355ZM11.4884 16.672C11.4884 17.0428 11.4643 17.3965 11.4884 17.7474C11.6894 20.215 12.9454 21.9666 15.0992 23.1034C15.17 23.1454 15.2507 23.1676 15.3328 23.1676C15.415 23.1676 15.4957 23.1454 15.5665 23.1034C17.7372 21.9937 18.9649 20.2293 19.1773 17.7802C19.2099 17.4151 19.1773 17.0457 19.1773 16.6691C17.7146 16.6848 16.3934 16.3767 15.3187 15.3355C14.2524 16.3867 12.9242 16.672 11.4884 16.672Z"
              fill="#484848"
            />
            <path
              d="M12.0604 9.40609C11.0367 9.40609 10.0115 9.40609 8.9877 9.40609C8.78663 9.40609 8.61388 9.33049 8.59547 9.13223C8.5971 8.9814 8.65236 8.83616 8.75123 8.72287C8.80221 8.65868 8.95089 8.65725 9.05567 8.65725C9.61075 8.65725 10.1644 8.65725 10.7181 8.65725H15.0001C15.0666 8.65725 15.1417 8.65725 15.2011 8.65725C15.2987 8.65975 15.3915 8.69968 15.4608 8.76889C15.53 8.8381 15.5703 8.93134 15.5736 9.02953C15.5729 9.07985 15.5621 9.12951 15.5419 9.17554C15.5217 9.22156 15.4924 9.263 15.4559 9.29736C15.4194 9.33173 15.3764 9.35832 15.3295 9.37553C15.2825 9.39274 15.2326 9.40023 15.1827 9.39753C14.6163 9.39753 14.0584 9.39753 13.4963 9.39753L12.0604 9.40609Z"
              fill="#484848"
            />
            <path
              d="M10.2196 11.8095C10.3142 11.804 10.4091 11.8083 10.5028 11.8223C10.5842 11.8403 10.6571 11.8854 10.7098 11.9503C10.7625 12.0153 10.7919 12.0962 10.7932 12.1801C10.7945 12.264 10.7677 12.3458 10.717 12.4124C10.6664 12.479 10.5949 12.5264 10.5142 12.5469C10.4315 12.5615 10.3474 12.5668 10.2635 12.5626H4.17469C4.09093 12.5662 4.00702 12.5619 3.92406 12.5498C3.83933 12.5387 3.76198 12.4955 3.70778 12.429C3.65358 12.3625 3.6266 12.2776 3.63236 12.1918C3.62539 12.104 3.65201 12.0168 3.70676 11.9481C3.76152 11.8794 3.84027 11.8344 3.92689 11.8223C4.01048 11.8119 4.09479 11.8085 4.17894 11.8124L10.2196 11.8095Z"
              fill="#484848"
            />
            <path
              d="M9.24542 14.9675C9.54561 14.9675 9.70562 15.1015 9.70562 15.3454C9.70562 15.5893 9.54561 15.7191 9.26524 15.7191C7.52827 15.7191 5.7913 15.7191 4.05433 15.7191C3.77113 15.7191 3.61962 15.5765 3.61962 15.3397C3.61962 15.103 3.78246 14.9675 4.05999 14.966L9.24542 14.9675Z"
              fill="#484848"
            />
            <path
              d="M6.47429 18.1183C7.25451 18.1183 8.0319 18.1183 8.81353 18.1183C9.12364 18.1183 9.27657 18.2424 9.28082 18.4891C9.28506 18.7359 9.13922 18.8785 8.83194 18.8785C7.2394 18.8785 5.64592 18.8785 4.0515 18.8785C3.84901 18.8785 3.65926 18.8086 3.64086 18.5933C3.64831 18.4419 3.7056 18.2974 3.8037 18.1825C3.84759 18.124 3.98778 18.1211 4.0869 18.1211C4.88411 18.1211 5.68132 18.1211 6.47712 18.1211L6.47429 18.1183Z"
              fill="#484848"
            />
            <path
              d="M4.9889 9.40609C4.67737 9.40609 4.36727 9.40609 4.05575 9.40609C3.77962 9.40609 3.61678 9.26345 3.61962 9.02953C3.62245 8.79561 3.77113 8.66011 4.03592 8.65725C4.69153 8.65725 5.34715 8.65725 6.00134 8.65725C6.27322 8.65725 6.40915 8.79989 6.40774 9.03524C6.40632 9.27059 6.26614 9.40181 5.99568 9.40466C5.65442 9.40894 5.32449 9.40609 4.9889 9.40609Z"
              fill="#484848"
            />
            <path
              d="M14.2383 12.564C13.9367 12.564 13.635 12.564 13.3334 12.564C13.0701 12.564 12.9256 12.4214 12.927 12.1875C12.9285 11.9536 13.0686 11.8166 13.3377 11.8138C13.9475 11.8081 14.5588 11.8081 15.1714 11.8138C15.221 11.8113 15.2706 11.8187 15.3173 11.8356C15.3641 11.8525 15.407 11.8785 15.4437 11.9122C15.4805 11.9458 15.5102 11.9865 15.5313 12.0318C15.5523 12.0771 15.5643 12.1261 15.5665 12.1761C15.567 12.2288 15.5567 12.2811 15.5362 12.3296C15.5158 12.3782 15.4856 12.4219 15.4476 12.4582C15.4096 12.4945 15.3646 12.5225 15.3153 12.5404C15.2661 12.5584 15.2137 12.566 15.1615 12.5626C14.8585 12.5697 14.5484 12.564 14.2383 12.564Z"
              fill="#484848"
            />
            <path
              d="M16.4671 6.74451C15.5424 6.74451 14.6178 6.74451 13.6945 6.74451C12.9256 6.74451 12.4867 6.30376 12.4852 5.53638C12.4852 4.38579 12.4852 3.23472 12.4852 2.08318V1.76224C12.3705 1.76224 12.2799 1.74941 12.1907 1.74941C9.18311 1.74941 6.17551 1.75939 3.16791 1.74941C2.98018 1.73988 2.79255 1.76997 2.61704 1.83774C2.44153 1.9055 2.28201 2.00946 2.1487 2.14293C2.01539 2.27641 1.91123 2.43647 1.8429 2.61285C1.77457 2.78924 1.74358 2.97805 1.7519 3.16721C1.77031 8.87263 1.76181 14.5781 1.76323 20.2835C1.74869 20.5739 1.83586 20.8602 2.00951 21.0925C2.18316 21.3248 2.43227 21.4882 2.71337 21.5544C2.83569 21.5808 2.96073 21.5923 3.08578 21.5886H9.94209C10.017 21.5814 10.0924 21.5814 10.1672 21.5886C10.2592 21.6 10.3438 21.6448 10.4052 21.7147C10.4666 21.7846 10.5005 21.8747 10.5005 21.968C10.5005 22.0613 10.4666 22.1514 10.4052 22.2213C10.3438 22.2912 10.2592 22.336 10.1672 22.3474C10.1004 22.3539 10.033 22.3539 9.96616 22.3474H3.09003C1.86235 22.3431 1 21.4731 1 20.2378C1 14.5324 1 8.82699 1 3.12156C1 1.86494 1.8312 1.00628 3.07162 1.00342C6.29729 0.997718 9.52295 0.999144 12.7486 1.0077C12.9195 1.01507 13.0824 1.08272 13.2088 1.19883C14.8136 2.7935 16.4057 4.3972 17.985 6.00993C18.1056 6.14356 18.1753 6.31587 18.1818 6.49632C18.1946 8.98389 18.1903 11.4715 18.1903 13.959C18.1949 14.0354 18.1902 14.112 18.1762 14.1872C18.1695 14.2337 18.1536 14.2783 18.1296 14.3185C18.1056 14.3587 18.0739 14.3937 18.0364 14.4214C17.9988 14.4491 17.9561 14.4691 17.9109 14.4801C17.8656 14.491 17.8186 14.4928 17.7726 14.4853C17.6827 14.4831 17.5972 14.4457 17.5343 14.3809C17.4713 14.3162 17.4359 14.2293 17.4356 14.1387C17.4214 13.9961 17.4356 13.8349 17.4356 13.6823V6.74451H16.4671ZM13.2485 2.38699C13.241 2.43422 13.2363 2.48185 13.2343 2.52962C13.2343 3.51857 13.2343 4.50703 13.2343 5.49502C13.2343 5.86159 13.3533 5.97713 13.7158 5.97855H16.8239L13.2485 2.38699Z"
              stroke="#484848"
              stroke-width="0.5"
              stroke-miterlimit="10"
            />
            <path
              d="M10.7393 17.1355C10.7393 16.8645 10.7237 16.5935 10.7393 16.3239C10.7634 15.9887 10.8937 15.8789 11.2307 15.896C11.9472 15.9203 12.6566 15.896 13.3462 15.6664C13.9839 15.4585 14.5549 15.0828 15.0001 14.5781C15.2054 14.3498 15.4419 14.3213 15.6274 14.531C16.5662 15.5993 17.7854 15.9302 19.1433 15.8974C19.8711 15.8803 19.9094 15.8974 19.9533 16.6391C20.1487 19.934 18.5089 22.5614 15.6684 23.885C15.5676 23.9353 15.4567 23.9615 15.3442 23.9615C15.2317 23.9615 15.1207 23.9353 15.0199 23.885C12.3281 22.7111 10.694 20.1537 10.7393 17.1355ZM11.4884 16.672C11.4884 17.0428 11.4643 17.3965 11.4884 17.7474C11.6894 20.215 12.9454 21.9666 15.0992 23.1034C15.17 23.1454 15.2507 23.1676 15.3328 23.1676C15.415 23.1676 15.4957 23.1454 15.5665 23.1034C17.7372 21.9937 18.9649 20.2293 19.1773 17.7802C19.2099 17.4151 19.1773 17.0457 19.1773 16.6691C17.7146 16.6848 16.3934 16.3767 15.3187 15.3355C14.2524 16.3867 12.9242 16.672 11.4884 16.672Z"
              stroke="#484848"
              stroke-width="0.5"
              stroke-miterlimit="10"
            />
            <path
              d="M12.0604 9.40609C11.0367 9.40609 10.0115 9.40609 8.9877 9.40609C8.78663 9.40609 8.61388 9.33049 8.59547 9.13223C8.5971 8.9814 8.65236 8.83616 8.75123 8.72287C8.80221 8.65868 8.95089 8.65725 9.05567 8.65725C9.61075 8.65725 10.1644 8.65725 10.7181 8.65725H15.0001C15.0666 8.65725 15.1417 8.65725 15.2011 8.65725C15.2987 8.65975 15.3915 8.69968 15.4608 8.76889C15.53 8.8381 15.5703 8.93134 15.5736 9.02953C15.5729 9.07985 15.5621 9.12951 15.5419 9.17554C15.5217 9.22156 15.4924 9.263 15.4559 9.29736C15.4194 9.33173 15.3764 9.35832 15.3295 9.37553C15.2825 9.39274 15.2326 9.40023 15.1827 9.39753C14.6163 9.39753 14.0584 9.39753 13.4963 9.39753L12.0604 9.40609Z"
              stroke="#484848"
              stroke-width="0.5"
              stroke-miterlimit="10"
            />
            <path
              d="M10.2196 11.8095C10.3142 11.804 10.4091 11.8083 10.5028 11.8223C10.5842 11.8403 10.6571 11.8854 10.7098 11.9503C10.7625 12.0153 10.7919 12.0962 10.7932 12.1801C10.7945 12.264 10.7677 12.3458 10.717 12.4124C10.6664 12.479 10.5949 12.5264 10.5142 12.5469C10.4315 12.5615 10.3474 12.5668 10.2635 12.5626H4.17469C4.09093 12.5662 4.00702 12.5619 3.92406 12.5498C3.83933 12.5387 3.76198 12.4955 3.70778 12.429C3.65358 12.3625 3.6266 12.2776 3.63236 12.1918C3.62539 12.104 3.65201 12.0168 3.70676 11.9481C3.76152 11.8794 3.84027 11.8344 3.92689 11.8223C4.01048 11.8119 4.09479 11.8085 4.17894 11.8124L10.2196 11.8095Z"
              stroke="#484848"
              stroke-width="0.5"
              stroke-miterlimit="10"
            />
            <path
              d="M9.24542 14.9675C9.54561 14.9675 9.70562 15.1015 9.70562 15.3454C9.70562 15.5893 9.54561 15.7191 9.26524 15.7191C7.52827 15.7191 5.7913 15.7191 4.05433 15.7191C3.77113 15.7191 3.61962 15.5765 3.61962 15.3397C3.61962 15.103 3.78246 14.9675 4.05999 14.966L9.24542 14.9675Z"
              stroke="#484848"
              stroke-width="0.5"
              stroke-miterlimit="10"
            />
            <path
              d="M6.47429 18.1183C7.25451 18.1183 8.0319 18.1183 8.81353 18.1183C9.12364 18.1183 9.27657 18.2424 9.28082 18.4891C9.28506 18.7359 9.13922 18.8785 8.83194 18.8785C7.2394 18.8785 5.64592 18.8785 4.0515 18.8785C3.84901 18.8785 3.65926 18.8086 3.64086 18.5933C3.64831 18.4419 3.7056 18.2974 3.8037 18.1825C3.84759 18.124 3.98778 18.1211 4.0869 18.1211C4.88411 18.1211 5.68132 18.1211 6.47712 18.1211L6.47429 18.1183Z"
              stroke="#484848"
              stroke-width="0.5"
              stroke-miterlimit="10"
            />
            <path
              d="M4.9889 9.40609C4.67737 9.40609 4.36727 9.40609 4.05575 9.40609C3.77962 9.40609 3.61678 9.26345 3.61962 9.02953C3.62245 8.79561 3.77113 8.66011 4.03592 8.65725C4.69153 8.65725 5.34715 8.65725 6.00134 8.65725C6.27322 8.65725 6.40915 8.79989 6.40774 9.03524C6.40632 9.27059 6.26614 9.40181 5.99568 9.40466C5.65442 9.40894 5.32449 9.40609 4.9889 9.40609Z"
              stroke="#484848"
              stroke-width="0.5"
              stroke-miterlimit="10"
            />
            <path
              d="M14.2383 12.564C13.9367 12.564 13.635 12.564 13.3334 12.564C13.0701 12.564 12.9256 12.4214 12.927 12.1875C12.9285 11.9536 13.0686 11.8166 13.3377 11.8138C13.9475 11.8081 14.5588 11.8081 15.1714 11.8138C15.221 11.8113 15.2706 11.8187 15.3173 11.8356C15.3641 11.8525 15.407 11.8785 15.4437 11.9122C15.4805 11.9458 15.5102 11.9865 15.5313 12.0318C15.5523 12.0771 15.5643 12.1261 15.5665 12.1761C15.567 12.2288 15.5567 12.2811 15.5362 12.3296C15.5158 12.3782 15.4856 12.4219 15.4476 12.4582C15.4096 12.4945 15.3646 12.5225 15.3153 12.5404C15.2661 12.5584 15.2137 12.566 15.1615 12.5626C14.8585 12.5697 14.5484 12.564 14.2383 12.564Z"
              stroke="#484848"
              stroke-width="0.5"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
        <p>Claim</p>
      </div>
    </div>
  );
};

export default BottomNav;
