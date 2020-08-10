import React from 'react'
import {NavLink} from 'react-router-dom';

function navbar() {

    return (
        <div>
            <header class="text-gray-700 body-font fixed-top">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <NavLink to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" >
<circle cx="512" cy="512" r="512" fill="#667EEA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M346.808 590.907C375.676 573.44 483.577 586.243 568.338 590.907C635.646 594.61 683.721 587.271 699.108 597.677C733.871 621.187 716.986 734.872 657.083 750.419C597.181 765.966 375.125 787.682 336.838 750.419C298.551 713.157 295.016 622.243 346.808 590.907Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M367.939 561.111C413.393 555.594 457.453 569.51 501.889 576.524C525.35 580.226 548.84 582.99 572.582 584.017C577.358 584.226 582.137 584.348 586.915 584.445C587.36 580.239 589.714 576.376 594.816 574.062C605.272 569.322 613.642 567.185 625.122 567.642C635.632 568.057 646.178 569.137 656.527 571.032C675.318 574.477 694.194 582.295 707.939 595.878C739.751 627.308 734.909 677.792 710.329 712.026C659.545 782.764 566.856 786.047 487.473 785.124L480.147 785.029C407.866 783.995 304.453 794.772 271.614 712.535C259.538 682.294 261.216 647.242 276.001 618.237C293.636 583.642 330.758 565.623 367.939 561.111ZM593.721 678.891L593.072 678.918C559.747 680.202 526.427 681.105 493.083 681.695C494.081 690.258 495.099 698.823 496.264 707.368C497.176 714.092 498.155 720.808 499.174 727.516C499.605 730.356 501.188 734.766 500.74 737.58L500.579 738.692V738.692C502.291 739.466 503.844 740.713 505 742.523C505.403 743.149 505.694 743.781 505.985 744.409C531.872 744.613 559.731 744.111 586.122 739.405L586.175 738.832V738.832C586.653 735.461 588.056 733.191 589.919 731.635C591.773 720.884 591.604 709.428 592.321 698.762C592.768 692.136 593.252 685.515 593.721 678.891ZM467.616 682.149C443.596 682.558 419.565 682.872 395.55 682.579L384.648 682.411V682.411C386.95 694.762 389.456 707.072 391.538 719.505C393.71 732.465 382.304 740.702 372.432 740.37C373.541 740.552 374.647 740.739 375.755 740.895C406.599 745.257 438.625 744.1 469.926 744.066C468.242 734.237 468.924 723.146 468.672 714.942L468.624 713.672C468.145 703.159 467.809 692.654 467.616 682.149ZM304.459 679.882C305.292 686.305 306.914 692.59 309.34 698.443C319.593 723.167 343.1 734.705 367.971 739.564C363.656 738.074 360.229 734.494 359.364 728.361C357.208 713.114 356.433 697.613 356.374 682.13C339.041 681.969 321.591 681.599 304.459 679.882ZM684.112 674.603C671.771 677.515 657.431 676.181 645.323 676.73C633.98 677.245 622.631 677.694 611.288 678.154C611.823 685.898 612.344 693.639 612.91 701.378C613.641 711.381 613.709 721.952 615.625 731.912C638.454 724.121 658.91 711.627 674.256 691.647C678.079 686.67 681.503 680.828 684.112 674.603ZM362.723 601.677C342.18 606.541 322.738 616.816 312.289 635.614C306.087 646.769 303.359 659.99 303.883 673.018C321.246 670.997 338.907 670.231 356.484 669.597C356.542 666.431 356.617 663.27 356.712 660.115L356.983 652.028C357.462 636.605 357.703 617.238 362.723 601.677ZM469.052 603.558L460.009 602.542C434.891 599.68 409.786 596.676 384.666 598.398C381.03 598.649 377.339 599.045 373.64 599.587C378.08 615.609 377.707 634.425 379.562 650.286C380.279 656.418 381.184 662.5 382.187 668.558L386.545 668.355V668.355C413.498 666.894 440.479 665.995 467.454 664.925C467.452 659.861 467.48 654.793 467.561 649.723L467.66 644.653C467.967 631.704 467.131 617.117 469.052 603.558ZM595.189 601.503C568.88 605.748 541.691 606.652 515.848 606.684C505.526 606.697 495.21 606.063 484.899 605.149C485.571 610.639 485.92 616.193 486.426 621.606C487.444 632.546 488.608 643.47 489.872 654.383L491 663.932V663.932C524.156 662.429 557.31 660.804 590.458 659.121L595.136 658.87V658.87L596.447 640.518C597.34 628.281 598.321 616.046 599.708 603.865L598.668 603.489V603.489C597.446 602.987 596.287 602.295 595.189 601.503ZM606.614 606.057C608.064 623.36 608.865 640.735 609.932 658.067L631.784 656.899C635.426 656.701 639.068 656.498 642.709 656.288C656.87 655.472 675.066 651.184 689.066 655.184C690.135 642.457 686.497 630.058 675.011 621.508C654.846 606.491 629.17 611.838 606.614 606.057ZM531.952 451.379C564.493 432.744 646.139 413.697 651.31 472.258C653.688 499.206 633.653 521.535 610.258 531.499L609.38 531.866C587.437 540.887 548.546 551.075 529.558 531.514C513.754 515.233 534.715 486.041 554.353 499.379C564.445 506.231 585.688 501.182 596.949 497.922L597.654 497.716C609.806 494.144 626.008 482.713 620.983 467.75C616.536 454.513 597.614 452.095 585.764 451.666C568.075 451.032 550.861 455.139 533.334 456.476C530.558 456.688 529.701 452.668 531.952 451.379ZM666.747 357.213C710.912 355.145 738.386 403.367 728.23 442.879C726.474 449.696 718.848 456.389 711.488 455.623L709.633 455.452C708.691 455.361 707.744 455.242 706.874 455.002C699.884 453.066 693.618 445.796 694.127 438.26L694.263 436.064C695.293 417.399 693.27 395.894 671.087 391.374C652.274 387.54 641.771 405.648 641.548 422.316C641.506 425.275 638.181 427.34 635.564 425.749C621.964 417.474 619.609 401.01 624.803 386.832C631.387 368.867 647.865 358.096 666.747 357.213ZM338.998 367.556C371.138 356.832 405.814 373.964 421.376 402.379C426.836 403.96 432.287 408.168 431.529 414.611C430.434 423.881 428.785 429.725 422.357 436.755C412.304 447.751 393.475 442.129 389.296 428.592L389.119 427.981C384.373 410.483 365.111 398.937 347.566 405.063C327.069 412.217 327.662 433.865 313.285 446.476C311.596 447.958 309.57 448.194 307.545 447.215C292.274 439.836 295.018 417.626 300.462 404.914C307.603 388.233 321.482 373.397 338.998 367.556ZM295.228 269.957C321.272 243.382 389.185 217.667 407.001 266.74C410.395 276.087 403.17 288.69 393.438 290.629C377.502 293.8 363.364 286.882 347.533 288.123C334.718 289.133 321.351 293.415 311.105 301.354C282.728 323.342 276.486 360.531 256.713 388.516C255.75 389.879 253.881 389.306 253.703 387.699C249.201 346.957 266.701 299.061 295.228 269.957ZM634.887 243.796C652.17 237.692 671.742 238.214 689.115 243.629C706.616 249.086 722.682 259.448 735.06 272.988C740.676 279.134 745.873 285.917 750.041 293.137C752.255 296.964 754.583 304.868 757.1 309.575C770.715 317.435 776.534 335.347 764.345 348.09L763.795 348.649L762.164 350.266C755.612 356.752 745.732 359.563 736.788 356.972C716.774 351.181 714.343 335.417 707.414 318.686C702.837 307.634 694.996 297.855 685.49 290.671C663.023 273.701 626.184 268.294 599.135 276.292C597.695 276.718 596.003 274.884 597.03 273.552C602.155 266.913 605.109 261.464 611.971 256.107C618.937 250.672 626.539 246.745 634.887 243.796Z" fill="black"/>
</svg>

      <span class="ml-3 text-2xl">Harsh Badhai</span>
    </NavLink>
    
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a  class="mr-5 text-xl hover:text-indigo-600"  href="#work">Work</a>
      <a class="mr-5 text-xl hover:text-indigo-600" href="#about">About</a>
      <a class="mr-5 text-xl hover:text-indigo-600" href="#contact">Contact</a>
    </nav>
    <button class="inline-flex items-center bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 text-xl"> <a href="https://drive.google.com/file/d/1uTIPwsX5I0q9_DvJEU2nM1eFY_2xzIoi/view?usp=sharing" rel="noopener noreferrer" target="_blank" >Resume
      </a>
    </button>
  </div>
</header>
        </div>
    )
}

export default navbar
