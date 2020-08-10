import React from 'react';
import {NavLink} from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer class="text-gray-700 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <NavLink to="/" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"  class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full">
<circle cx="512" cy="512" r="512" fill="#667EEA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M295.964 615.283C333.805 592.388 475.243 609.17 586.349 615.283C674.577 620.138 737.594 610.517 757.763 624.158C803.331 654.976 781.198 803.995 702.677 824.375C624.157 844.754 333.082 873.219 282.895 824.375C232.709 775.53 228.075 656.359 295.964 615.283Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M323.663 576.226C383.245 568.995 440.999 587.236 499.246 596.431C530 601.283 560.791 604.906 591.912 606.253C598.172 606.526 604.436 606.686 610.7 606.814C611.283 601.3 614.369 596.237 621.056 593.203C634.763 586.99 645.733 584.188 660.782 584.788C674.558 585.331 688.383 586.748 701.947 589.231C726.579 593.747 751.322 603.995 769.34 621.799C811.039 662.998 804.692 729.174 772.472 774.048C705.903 866.773 584.407 871.076 480.35 869.866L470.747 869.741C376 868.387 240.445 882.513 197.4 774.716C181.57 735.076 183.769 689.129 203.15 651.109C226.266 605.761 274.927 582.142 323.663 576.226ZM619.621 730.615L618.771 730.65C575.088 732.333 531.411 733.517 487.704 734.289C489.011 745.514 490.347 756.742 491.873 767.942C493.069 776.756 494.352 785.559 495.688 794.353C496.253 798.076 498.327 803.856 497.741 807.544L497.529 809.002C499.773 810.017 501.809 811.652 503.325 814.024C503.852 814.845 504.234 815.672 504.615 816.497C538.549 816.763 575.067 816.105 609.66 809.937L609.729 809.186C610.357 804.767 612.195 801.792 614.637 799.752C617.068 785.66 616.846 770.643 617.786 756.662C618.372 747.976 619.007 739.297 619.621 730.615ZM454.321 734.885C422.835 735.421 391.335 735.833 359.856 735.449L345.566 735.228C348.583 751.419 351.868 767.554 354.597 783.852C357.445 800.839 342.493 811.638 329.552 811.201C331.006 811.44 332.455 811.686 333.909 811.891C374.339 817.608 416.319 816.092 457.349 816.047C455.141 803.163 456.036 788.625 455.706 777.871L455.643 776.205C455.015 762.425 454.574 748.655 454.321 734.885ZM240.453 731.914C241.546 740.333 243.672 748.572 246.852 756.243C260.292 788.652 291.104 803.776 323.706 810.145C318.049 808.192 313.558 803.499 312.424 795.461C309.597 775.474 308.581 755.155 308.505 734.861C285.784 734.649 262.91 734.165 240.453 731.914ZM738.106 724.994C721.93 728.811 703.132 727.062 687.261 727.782C672.393 728.457 657.517 729.046 642.648 729.649C643.349 739.799 644.032 749.947 644.774 760.091C645.732 773.203 645.822 787.059 648.333 800.116C678.257 789.903 705.071 773.525 725.187 747.336C730.199 740.811 734.687 733.154 738.106 724.994ZM316.827 629.401C289.899 635.777 264.414 649.246 250.718 673.887C242.588 688.509 239.012 705.839 239.699 722.916C262.458 720.267 285.609 719.262 308.649 718.431C308.725 714.282 308.823 710.138 308.947 706.002L309.302 695.402C309.93 675.186 310.246 649.799 316.827 629.401ZM456.204 631.867L444.35 630.536C411.425 626.784 378.517 622.846 345.59 625.104C340.824 625.433 335.986 625.952 331.137 626.662C336.957 647.663 336.468 672.328 338.899 693.118C339.839 701.157 341.025 709.129 342.34 717.07L348.052 716.804C383.384 714.888 418.75 713.711 454.109 712.308C454.107 705.669 454.143 699.026 454.249 692.381L454.38 685.735C454.782 668.761 453.686 649.641 456.204 631.867ZM621.545 629.173C587.059 634.738 551.419 635.923 517.544 635.964C504.014 635.982 490.491 635.151 476.975 633.952C477.856 641.149 478.314 648.429 478.977 655.525C480.311 669.865 481.837 684.184 483.494 698.489L484.973 711.006C528.435 709.036 571.892 706.906 615.343 704.7L621.475 704.371L623.194 680.315C624.364 664.274 625.651 648.237 627.468 632.269L626.105 631.777C624.503 631.119 622.984 630.212 621.545 629.173ZM636.521 635.143C638.421 657.824 639.472 680.599 640.87 703.318L669.514 701.787C674.288 701.527 679.062 701.261 683.835 700.987C702.398 699.917 726.249 694.296 744.6 699.539C746.001 682.857 741.232 666.604 726.176 655.396C699.744 635.711 666.088 642.721 636.521 635.143ZM538.654 432.389C581.308 407.961 688.331 382.995 695.109 459.757C698.226 495.082 671.964 524.35 641.298 537.411L640.146 537.893C611.384 549.717 560.405 563.071 535.515 537.431C514.799 516.089 542.275 477.825 568.017 495.308C581.246 504.289 609.091 497.671 623.852 493.398L624.776 493.128C640.706 488.446 661.943 473.462 655.356 453.849C649.527 436.498 624.724 433.328 609.191 432.765C586.004 431.934 563.439 437.318 540.464 439.07C536.825 439.348 535.703 434.078 538.654 432.389ZM715.344 308.955C773.237 306.244 809.249 369.455 795.937 421.247C793.636 430.183 783.64 438.956 773.991 437.952L771.56 437.728C770.325 437.609 769.084 437.453 767.943 437.138C758.781 434.601 750.568 425.07 751.235 415.192L751.412 412.314C752.763 387.847 750.112 359.659 721.034 353.734C696.373 348.708 682.606 372.444 682.314 394.292C682.258 398.171 677.9 400.879 674.469 398.794C656.642 387.946 653.555 366.365 660.364 347.78C668.995 324.231 690.593 310.113 715.344 308.955ZM285.728 322.512C327.858 308.456 373.311 330.913 393.71 368.159C400.866 370.231 408.013 375.747 407.019 384.193C405.583 396.344 403.421 404.005 394.996 413.219C381.818 427.634 357.137 420.264 351.659 402.519L351.427 401.718C345.205 378.781 319.957 363.648 296.958 371.677C270.09 381.055 270.869 409.431 252.023 425.962C249.809 427.905 247.154 428.214 244.498 426.931C224.481 417.258 228.079 388.145 235.215 371.482C244.575 349.616 262.767 330.169 285.728 322.512ZM228.352 194.578C262.491 159.744 351.513 126.036 374.867 190.362C379.316 202.614 369.844 219.135 357.088 221.675C336.199 225.832 317.666 216.764 296.916 218.391C280.117 219.715 262.596 225.328 249.165 235.735C211.968 264.556 203.786 313.304 177.867 349.987C176.605 351.774 174.155 351.023 173.922 348.917C168.02 295.511 190.96 232.728 228.352 194.578ZM673.581 160.287C696.237 152.285 721.891 152.97 744.665 160.068C767.605 167.221 788.664 180.804 804.889 198.551C812.251 206.608 819.063 215.499 824.527 224.964C827.43 229.979 830.481 240.341 833.78 246.51C851.626 256.814 859.254 280.293 843.276 296.997L842.556 297.729L840.419 299.849C831.83 308.351 818.879 312.035 807.155 308.64C780.92 301.048 777.733 280.385 768.651 258.453C762.652 243.966 752.374 231.147 739.913 221.731C710.463 199.486 662.174 192.399 626.718 202.882C624.83 203.442 622.613 201.037 623.958 199.292C630.677 190.588 634.549 183.446 643.544 176.425C652.675 169.299 662.64 164.152 673.581 160.287Z" fill="black"/>
</svg>
      <span class="ml-3 text-xl">Harsh Badhai</span>
    </NavLink>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Harsh Badhai —
      <a href="https://dribbble.com/harsh242" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@harsh242 (Dribbble)</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-red-500" href="https://www.instagram.com/frames_by._harsh/" rel="noopener noreferrer" target="_blank">
        Instagram
      </a>
      <a class="ml-3 text-blue-500" href="https://www.linkedin.com/in/harshbadhai/" rel="noopener noreferrer" target="_blank">
        Linkedin
      </a>
      <a class="ml-3 text-black-500" href="https://medium.com/@harshbadhai242" rel="noopener noreferrer" target="_blank">
      Medium
      </a>
      <a class="ml-3 text-indigo-500" href="https://twitter.com/harshbadhai28" rel="noopener noreferrer" target="_blank">
        Twitter
      </a>
      <a class="ml-3 text-teal-500" href="https://www.behance.net/harshbadhai?isa0=1" rel="noopener noreferrer" target="_blank">
        Behance
      </a>
    </span>
  </div>
</footer>
        </div>
    )
}

export default Footer
