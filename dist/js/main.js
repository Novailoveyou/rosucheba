function changeLocationDependedHeading(e="",t="",n="",o="",r=""){e.innerText="RU"===userCountryCode?t:"KZ"===userCountryCode?n:"UZ"===userCountryCode?o:r}function changeCustomizedCountryText(e="",t="",n="",o=""){customizedCountryText.innerText="RU"===userCountryCode?e:"KZ"===userCountryCode?t:"UZ"===userCountryCode?n:o}function insertAfter(e,t){e.parentNode.insertBefore(t,e.nextSibling)}function dropDownStepTwoInsertItem(e=""){let t;t=document.createElement("li"),t.classList.add("inner-dropdown-items__item"),t.innerHTML=`\n        <p>\n          ${svgCheckMark}\n          ${e}\n        </p>\n      `,insertAfter(insertAfterLiStepTwo,t)}async function sumbitData(e){const t=await fetch("/email",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});await t.json()}const ctaSubmitBtn=document.getElementById("cta-submit-application"),btnAskQuestion=document.getElementById("section-ask-questions"),moduleQuestions=document.getElementById("module-questions"),moduleQuestionTextarea=document.getElementById("js-text-input-ask-anything"),sectionAskQuestionsInner=document.getElementById("cta-ask-question"),oneMoreQuestionText=document.getElementById("one-more-question"),moduleHorizontalCloseBtn=document.getElementById("js-btn-horizontal-line-close"),menuToggler=document.getElementById("menu-toggle"),inputSelectChooseUni=document.getElementById("input-select-choose-uni"),inputSelectChooseUniInnerText=document.getElementById("input-select-choose-uni-inner-text"),inputSelectChooseProgramm=document.getElementById("input-select-choose-programm"),inputSelectChooseProgrammInnerText=document.getElementById("input-select-choose-programm-inner-text"),inputSelectChooseUniDropdown=document.getElementById("input-select-choose-uni-dropdown"),inputSelectChooseProgrammDropdown=document.getElementById("input-select-choose-programm-dropdown"),inputSelectChooseProgrammDropdownStepTwo=document.getElementById("input-select-choose-programm-dropdown--step-two"),dropDownUniItems=document.querySelectorAll(".input-select-choose-uni-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item"),dropDownUniItemsP=document.querySelectorAll(".input-select-choose-uni-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item p"),dropDownProgrammItems=document.querySelectorAll(".input-select-choose-programm-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item"),dropDownProgrammItemsP=document.querySelectorAll(".input-select-choose-programm-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item p"),dropDownProgrammItemsStepTwo=document.querySelectorAll(".input-select-choose-programm-dropdown--step-two .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item"),dropDownProgrammItemsPStepTwo=document.querySelectorAll(".input-select-choose-programm-dropdown--step-two .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item p"),selectedItemFromTheFirstStep=document.getElementById("inner-dropdown-items__item--selected"),phoneInputInnerText=document.getElementById("phone-number"),userInputNameText=document.getElementById("user-name"),navItemLinks=document.querySelectorAll(".nav-item__link"),navItemLinksArr=Array.from(navItemLinks),dropDownItemUniIcons=document.querySelectorAll(".inner-dropdown-items__item-uni__icon"),dropDownItemUniIconsArr=Array.from(dropDownItemUniIcons),dropDownItemProgrammIcons=document.querySelectorAll(".inner-dropdown-items__item-programm__icon"),dropDownItemProgrammIconsArr=Array.from(dropDownItemProgrammIcons),moduleStepOne=document.getElementById("module-questions__step-one"),moduleStepTwo=document.getElementById("module-questions__step-two"),moduleStepThree=document.getElementById("module-questions__step-three"),moduleStepSuccess=document.getElementById("module-questions__step-success"),telegramBtn=document.getElementById("sm-icons__link--telegram"),whatsappBtn=document.getElementById("sm-icons__link--whatsapp"),viberBtn=document.getElementById("sm-icons__link--viber"),vkBtn=document.getElementById("sm-icons__link--vk"),phoneBtn=document.getElementById("sm-icons__link--phone"),emailBtn=document.getElementById("sm-icons__link--email"),moduleBtnCall=document.getElementById("question-module__radio-call"),moduleBtnMessage=document.getElementById("question-module__radio-message"),moduleStepTwoTitle=document.getElementById("module-step-two-title"),moduleStepThreeTitle=document.getElementById("module-step-three-title"),moduleStepTwoArrowBack=document.getElementById("step-two-arrow-step-back"),moduleStepThreeArrowBack=document.getElementById("step-three-arrow-step-back"),moduleLabelEnterContactInfo=document.getElementById("module-label-enter-contact-info"),moduleInputContactInfo=document.getElementById("module-input-contact-info"),moduleBtnSubmit=document.getElementById("module_questions-submit-btn"),carouselBtnLeft=document.getElementById("carrousel-arrow-left-btn"),carouselBtnRight=document.getElementById("carrousel-arrow-right-btn"),carouselImgGroupOne=document.getElementById("content__img-group--1"),carouselImgGroupTwo=document.getElementById("content__img-group--2"),carouselImgGroupThree=document.getElementById("content__img-group--3"),svgCheckMark='<svg\n      class="inner-dropdown-items-programm__item__icon"\n      width="12"\n      height="9"\n      viewBox="0 0 12 9"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        fill-rule="evenodd"\n        clip-rule="evenodd"\n        d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"\n        fill="#fff"\n      />\n    </svg>',scrollToTheApplicationBtn=document.getElementById("cta-scroll-to-submit-application"),fillInTheFieldsBelow=document.getElementById("fill-in-fields"),userNameInput=document.getElementById("container-input--user-name"),insertAfterLiStepTwo=document.getElementById("js-insert-after--step-two"),numValidation=/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{5,12}$/,locationDependedHeading=document.getElementById("location-depended-heading"),customizedCountryText=document.getElementById("customizedCountryText"),userDevice=window.navigator.userAgent;queryString=window.location.search;const urlParams=new URLSearchParams(queryString),utmSource=urlParams.get("utm_source"),utmMedium=urlParams.get("utm_medium"),utmCampaign=urlParams.get("utm_campaign"),utmContent=urlParams.get("utm_content"),utmTerm=urlParams.get("utm_term");let userCity,userCountry,userCountryCode;fetch(locationUrlAPI="").then(e=>e.json()).then(e=>{userCity=e.city,userCountry=e.country,userCountryCode=e.country,"RU"===userCountry?userCountry="Russia":"KZ"===userCountry?userCountry="Kazakhstan":"UZ"==userCountry&&(userCountry="Uzbekistan"),changeLocationDependedHeading(locationDependedHeading,"дистанционно","дистанционно без ЕГЭ","дистанционно без ЕНТ и ЕГЭ","дистанционно без ЕНТ и ЕГЭ"),changeCustomizedCountryText("— мы помогаем абитуриентам выбирать образование, а Московским учебным заведениям — находить своих студентов!","— мы помогаем абитуриентам из Казахстана выбирать образование, а Московским учебным заведениям — находить своих студентов!","— мы помогаем абитуриентам из Узбекистана выбирать образование, а Московским учебным заведениям — находить своих студентов!","— мы помогаем абитуриентам выбирать образование, а Московским учебным заведениям — находить своих студентов!")}).catch(e=>{changeLocationDependedHeading(locationDependedHeading,"дистанционно","дистанционно без ЕГЭ","дистанционно без ЕНТ и ЕГЭ","дистанционно без ЕНТ и ЕГЭ"),changeCustomizedCountryText("— мы помогаем абитуриентам выбирать образование, а Московским учебным заведениям — находить своих студентов!","— мы помогаем абитуриентам из Казахстана выбирать образование, а Московским учебным заведениям — находить своих студентов!","— мы помогаем абитуриентам из Узбекистана выбирать образование, а Московским учебным заведениям — находить своих студентов!","— мы помогаем абитуриентам выбирать образование, а Московским учебным заведениям — находить своих студентов!")}),navItemLinks[0].addEventListener("click",e=>{const t=document.getElementById("about");t.scrollIntoView({behavior:"smooth"}),menuToggler.checked=!1,e.preventDefault()}),navItemLinks[1].addEventListener("click",e=>{const t=document.getElementById("partners");t.scrollIntoView({behavior:"smooth"}),menuToggler.checked=!1,e.preventDefault()}),navItemLinks[2].addEventListener("click",e=>{const t=document.getElementById("trusted-by");t.scrollIntoView({behavior:"smooth"}),menuToggler.checked=!1,e.preventDefault()}),inputSelectChooseUni.addEventListener("click",e=>{inputSelectChooseUniDropdown.classList.toggle("show-dropdown"),inputSelectChooseUniDropdown.classList.contains("show-dropdown")&&inputSelectChooseUni.scrollIntoView({behavior:"smooth"}),document.body.addEventListener("click",function e(t){!inputSelectChooseUniDropdown.classList.contains("show-dropdown")||inputSelectChooseUniDropdown.contains(t.target)||t.target===inputSelectChooseUniDropdown||inputSelectChooseUni.contains(t.target)||t.target===inputSelectChooseUni||(inputSelectChooseUniDropdown.classList.toggle("show-dropdown"),document.body.removeEventListener("click",e))}),e.preventDefault()}),scrollToTheApplicationBtn.addEventListener("click",e=>{fillInTheFieldsBelow.classList.remove("hidden"),fillInTheFieldsBelow.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{fillInTheFieldsBelow.classList.add("hidden")},3e3),e.preventDefault()}),inputSelectChooseUniDropdown.addEventListener("mousedown",e=>{const t=Array.from(dropDownUniItems),n=Array.from(dropDownUniItemsP);t.forEach(e=>{e.classList.remove("text-highlight--color")}),n.forEach(e=>{e.classList.remove("text-highlight--color")}),"svg"===e.target.tagName?(inputSelectChooseUniInnerText.innerText=e.target.parentElement.innerText,inputSelectChooseUniInnerText.innerText=inputSelectChooseUniInnerText.innerText.substring(inputSelectChooseUniInnerText.innerText.indexOf("(")+1).slice(0,-1),e.target.parentElement.classList.add("text-highlight--color")):"path"==e.target.tagName?(inputSelectChooseUniInnerText.innerText=e.target.parentElement.parentElement.innerText,inputSelectChooseUniInnerText.innerText=inputSelectChooseUniInnerText.innerText.substring(inputSelectChooseUniInnerText.innerText.indexOf("(")+1).slice(0,-1),e.target.parentElement.parentElement.classList.add("text-highlight--color")):(inputSelectChooseUniInnerText.innerText=e.target.innerText,inputSelectChooseUniInnerText.innerText=inputSelectChooseUniInnerText.innerText.substring(inputSelectChooseUniInnerText.innerText.indexOf("(")+1).slice(0,-1),e.target.classList.add("text-highlight--color")),inputSelectChooseUniInnerText.classList.add("text-highlight--color"),inputSelectChooseUniDropdown.classList.toggle("show-dropdown"),e.preventDefault()}),inputSelectChooseProgramm.addEventListener("click",e=>{inputSelectChooseProgrammDropdownStepTwo.classList.contains("show-dropdown")?(inputSelectChooseProgrammDropdownStepTwo.classList.remove("show-dropdown"),inputSelectChooseProgrammDropdown.classList.remove("show-dropdown")):(inputSelectChooseProgrammDropdownStepTwo.classList.remove("show-dropdown"),inputSelectChooseProgrammDropdown.classList.toggle("show-dropdown")),inputSelectChooseProgrammDropdown.classList.contains("show-dropdown")&&inputSelectChooseProgramm.scrollIntoView({behavior:"smooth"}),document.body.addEventListener("click",function e(t){!inputSelectChooseProgrammDropdown.classList.contains("show-dropdown")&&!inputSelectChooseProgrammDropdownStepTwo.classList.contains("show-dropdown")||inputSelectChooseProgrammDropdown.contains(t.target)||t.target===inputSelectChooseProgrammDropdown||inputSelectChooseProgramm.contains(t.target)||t.target===inputSelectChooseProgrammDropdownStepTwo||inputSelectChooseProgrammDropdownStepTwo.contains(t.target)||t.target===inputSelectChooseProgramm||selectedItemFromTheFirstStep.contains(t.target)||t.target===selectedItemFromTheFirstStep||(inputSelectChooseProgrammDropdown.classList.remove("show-dropdown"),inputSelectChooseProgrammDropdownStepTwo.classList.remove("show-dropdown"),document.body.removeEventListener("click",e))}),e.preventDefault()}),inputSelectChooseProgrammDropdown.addEventListener("click",e=>{const t=Array.from(dropDownProgrammItems),n=Array.from(dropDownProgrammItemsP);if(t.forEach(e=>{e.classList.remove("text-highlight--color")}),n.forEach(e=>{e.classList.remove("text-highlight--color")}),"svg"===e.target.tagName?(inputSelectChooseProgrammInnerText.innerText=e.target.parentElement.innerText,e.target.parentElement.classList.add("text-highlight--color")):"path"==e.target.tagName?(inputSelectChooseProgrammInnerText.innerText=e.target.parentElement.parentElement.innerText,e.target.parentElement.parentElement.classList.add("text-highlight--color")):(setTimeout(()=>{inputSelectChooseProgrammInnerText.innerText=e.target.innerText},400),e.target.classList.add("text-highlight--color")),inputSelectChooseProgrammInnerText.classList.add("text-highlight--color"),"Определюсь после консультации"===inputSelectChooseProgrammInnerText.innerText)inputSelectChooseProgrammDropdownStepTwo.classList.remove("show-dropdown");else{inputSelectChooseProgrammDropdownStepTwo.classList.add("show-dropdown");const e=document.getElementById("programm-dropdown-step-two-selected-step-one-item"),t=document.getElementById("inner-dropdown-items__item--selected");setTimeout(()=>{e.innerText=inputSelectChooseProgrammInnerText.innerText},400);const n=document.getElementById("inner-dropdown-items--step-two");setTimeout(()=>{if("Колледж"===e.innerText){const e=Array.prototype.slice.call(n.childNodes);e.forEach((e,t)=>{t>3&&e.remove()}),dropDownStepTwoInsertItem("Информационные системы и программирование"),dropDownStepTwoInsertItem("Гостиничное дело​"),dropDownStepTwoInsertItem("Банковское дело​​"),dropDownStepTwoInsertItem("Экономика и бухгалтерский учет по отраслям"),dropDownStepTwoInsertItem("Право и организация социального обеспечения"),dropDownStepTwoInsertItem("Коммерция по отраслям")}if("Бакалавриат"===e.innerText){const e=Array.prototype.slice.call(n.childNodes);e.forEach((e,t)=>{t>3&&e.remove()}),dropDownStepTwoInsertItem("Юриспруденция"),dropDownStepTwoInsertItem("Дизайн​"),dropDownStepTwoInsertItem("Лингвистика"),dropDownStepTwoInsertItem("Информационные системы и технологии"),dropDownStepTwoInsertItem("Прикладная информатика"),dropDownStepTwoInsertItem("Реклама и связи с общественностью"),dropDownStepTwoInsertItem("Бизнес-информатика"),dropDownStepTwoInsertItem("Государственное и муниципальное управление"),dropDownStepTwoInsertItem("Управление персоналом"),dropDownStepTwoInsertItem("Теплоэнергетика и теплотехника"),dropDownStepTwoInsertItem("Электроэнергетика и электротехника"),dropDownStepTwoInsertItem("Строительство"),dropDownStepTwoInsertItem("Психолого-педагогическое образование"),dropDownStepTwoInsertItem("Психология"),dropDownStepTwoInsertItem("Менеджмент"),dropDownStepTwoInsertItem("Экономика")}if("Специалитет"===e.innerText){const e=Array.prototype.slice.call(n.childNodes);e.forEach((e,t)=>{t>3&&e.remove()}),dropDownStepTwoInsertItem("Экономическая безопасность")}if("Магистратура"===e.innerText){const e=Array.prototype.slice.call(n.childNodes);e.forEach((e,t)=>{t>3&&e.remove()}),dropDownStepTwoInsertItem("Юриспруденция"),dropDownStepTwoInsertItem("Реклама и связи с общественностью"),dropDownStepTwoInsertItem("Психология"),dropDownStepTwoInsertItem("Прикладная информатика"),dropDownStepTwoInsertItem("Государственное и муниципальное управление"),dropDownStepTwoInsertItem("Управление персоналом"),dropDownStepTwoInsertItem("Менеджмент"),dropDownStepTwoInsertItem("Финансы и кредит"),dropDownStepTwoInsertItem("Экономика")}if("Профессиональная переподготовка"===e.innerText){const e=Array.prototype.slice.call(n.childNodes);e.forEach((e,t)=>{t>3&&e.remove()}),dropDownStepTwoInsertItem("Гуманитарные науки"),dropDownStepTwoInsertItem("Электроэнергетика"),dropDownStepTwoInsertItem("Строительство"),dropDownStepTwoInsertItem("Теплоэнергетика"),dropDownStepTwoInsertItem("Безопасность дорожного движения"),dropDownStepTwoInsertItem("Продукты питания - технология производства"),dropDownStepTwoInsertItem("Юриспруденция"),dropDownStepTwoInsertItem("Охрана труда"),dropDownStepTwoInsertItem("Информатика и вычислительная техника"),dropDownStepTwoInsertItem("Реклама и PR"),dropDownStepTwoInsertItem("Журналистика"),dropDownStepTwoInsertItem("Дизайн"),dropDownStepTwoInsertItem("Маркетинг"),dropDownStepTwoInsertItem("Туризм"),dropDownStepTwoInsertItem("Государственное и муниципальное управление"),dropDownStepTwoInsertItem("Логистика"),dropDownStepTwoInsertItem("Социальная работа"),dropDownStepTwoInsertItem("Экономика"),dropDownStepTwoInsertItem("Психология"),dropDownStepTwoInsertItem("Педагогика"),dropDownStepTwoInsertItem("Менеджмент")}if("Повышение квалификации"===e.innerText){const e=Array.prototype.slice.call(n.childNodes);e.forEach((e,t)=>{t>3&&e.remove()}),dropDownStepTwoInsertItem("Гуманитарные науки"),dropDownStepTwoInsertItem("Электроэнергетика"),dropDownStepTwoInsertItem("Строительство"),dropDownStepTwoInsertItem("Теплоэнергетика"),dropDownStepTwoInsertItem("Безопасность дорожного движения"),dropDownStepTwoInsertItem("Продукты питания - технология производства"),dropDownStepTwoInsertItem("Юриспруденция"),dropDownStepTwoInsertItem("Охрана труда"),dropDownStepTwoInsertItem("Информатика и вычислительная техника"),dropDownStepTwoInsertItem("Реклама и PR"),dropDownStepTwoInsertItem("Журналистика"),dropDownStepTwoInsertItem("Дизайн"),dropDownStepTwoInsertItem("Маркетинг"),dropDownStepTwoInsertItem("Туризм"),dropDownStepTwoInsertItem("Медицина"),dropDownStepTwoInsertItem("Государственное и муниципальное управление"),dropDownStepTwoInsertItem("Логистика"),dropDownStepTwoInsertItem("Социальная работа​"),dropDownStepTwoInsertItem("Экономика​​"),dropDownStepTwoInsertItem("Психология"),dropDownStepTwoInsertItem("Педагогика"),dropDownStepTwoInsertItem("Менеджмент")}if("Master of Business Administration (МВА)"===e.innerText){const e=Array.prototype.slice.call(n.childNodes);e.forEach((e,t)=>{t>3&&e.remove()}),dropDownStepTwoInsertItem("MBA Industry"),dropDownStepTwoInsertItem("MBA Professional"),dropDownStepTwoInsertItem("MBA Intensive"),dropDownStepTwoInsertItem("Mini-MBA")}},400),t.addEventListener("click",e=>{inputSelectChooseProgrammDropdownStepTwo.classList.remove("show-dropdown"),inputSelectChooseProgrammDropdown.classList.add("show-dropdown"),e.preventDefault()}),inputSelectChooseProgrammDropdownStepTwo.addEventListener("click",e=>{const t=Array.from(dropDownProgrammItemsStepTwo),n=Array.from(dropDownProgrammItemsPStepTwo);t.forEach(e=>{e.classList.remove("text-highlight--color")}),n.forEach(e=>{e.classList.remove("text-highlight--color")}),"svg"===e.target.tagName?(inputSelectChooseProgrammInnerText.innerText===e.target.parentElement.innerText?inputSelectChooseProgrammInnerText.innerText:inputSelectChooseProgrammInnerText.innerText=`${inputSelectChooseProgrammInnerText.innerHTML}, ${e.target.parentElement.innerText}`,e.target.parentElement.classList.add("text-highlight--color")):"path"==e.target.tagName?(inputSelectChooseProgrammInnerText.innerText===e.target.parentElement.parentElement.innerText?inputSelectChooseProgrammInnerText.innerText:inputSelectChooseProgrammInnerText.innerText=`${inputSelectChooseProgrammInnerText.innerText}, ${e.target.parentElement.parentElement.innerText}`,e.target.parentElement.parentElement.classList.add("text-highlight--color")):(inputSelectChooseProgrammInnerText.innerText===e.target.innerText?inputSelectChooseProgrammInnerText.innerText=inputSelectChooseProgrammInnerText.innerText:inputSelectChooseProgrammInnerText.innerText=`${inputSelectChooseProgrammInnerText.innerText}, ${e.target.innerText}`,e.target.classList.add("text-highlight--color")),inputSelectChooseProgrammInnerText.innerHTML=inputSelectChooseProgrammInnerText.innerHTML.replace(/,\s*$/,""),inputSelectChooseProgrammDropdownStepTwo.classList.remove("show-dropdown"),inputSelectChooseProgramm.scrollIntoView({behavior:"smooth"})})}inputSelectChooseProgrammDropdown.classList.toggle("show-dropdown"),e.preventDefault()}),window.addEventListener("scroll",function(e){window.scrollY>=720&&window.scrollY<=2e3?btnAskQuestion.classList.remove("hidden"):btnAskQuestion.classList.add("hidden"),e.preventDefault()}),btnAskQuestion.addEventListener("click",e=>{btnAskQuestion.classList.add("hidden"),moduleQuestions.classList.remove("hidden"),moduleStepOne.classList.remove("hidden"),document.body.classList.add("dark-overlay"),moduleQuestionTextarea.focus(),document.body.addEventListener("click",function e(t){(!btnAskQuestion.contains(t.target)&&t.target!==btnAskQuestion&&!moduleQuestions.contains(t.target)&&t.target!==moduleQuestions||t.target===btnAskQuestion&&btnAskQuestion.contains(t.target))&&(btnAskQuestion.classList.remove("hidden"),moduleQuestions.classList.add("hidden"),moduleStepOne.classList.add("hidden"),document.body.classList.remove("dark-overlay"),document.body.removeEventListener("click",e)),t.preventDefault()}),telegramBtn.addEventListener("click",e=>{""===moduleQuestionTextarea.value?(moduleQuestionTextarea.classList.add("bg-danger"),moduleQuestionTextarea.focus(),moduleQuestionTextarea.addEventListener("keyup",function(e){""!==e.target.value?moduleQuestionTextarea.classList.remove("bg-danger"):moduleQuestionTextarea.classList.add("bg-danger")})):(moduleStepOne.classList.add("hidden"),moduleStepTwo.classList.remove("hidden"),moduleStepTwoTitle.innerHTML="Telegram"),moduleBtnCall.addEventListener("click",e=>{moduleStepThree.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepThreeTitle.innerHTML="Telegram / Позвонить",moduleLabelEnterContactInfo.innerHTML="Напишите свой номер",moduleInputContactInfo.focus(),e.preventDefault()}),moduleBtnMessage.addEventListener("click",e=>{moduleStepThree.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepThreeTitle.innerHTML="Telegram / Написать",moduleLabelEnterContactInfo.innerHTML="Напишите свой номер",moduleInputContactInfo.focus(),e.preventDefault()}),moduleStepTwoArrowBack.addEventListener("click",e=>{moduleStepOne.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),e.preventDefault()}),moduleStepThreeArrowBack.addEventListener("click",e=>{moduleStepTwo.classList.remove("hidden"),moduleStepOne.classList.add("hidden"),moduleStepThree.classList.add("hidden"),e.preventDefault()}),e.preventDefault()}),whatsappBtn.addEventListener("click",e=>{""===moduleQuestionTextarea.value?(moduleQuestionTextarea.classList.add("bg-danger"),moduleQuestionTextarea.focus(),moduleQuestionTextarea.addEventListener("keyup",function(e){""!==e.target.value?moduleQuestionTextarea.classList.remove("bg-danger"):moduleQuestionTextarea.classList.add("bg-danger")})):(moduleStepOne.classList.add("hidden"),moduleStepTwo.classList.remove("hidden"),moduleStepTwoTitle.innerHTML="Whats App"),moduleBtnCall.addEventListener("click",e=>{moduleStepThree.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepThreeTitle.innerHTML="Whatsapp / Позвонить",moduleLabelEnterContactInfo.innerHTML="Напишите свой номер",moduleInputContactInfo.focus(),e.preventDefault()}),moduleBtnMessage.addEventListener("click",e=>{moduleStepThree.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepThreeTitle.innerHTML="Whatsapp / Написать",moduleLabelEnterContactInfo.innerHTML="Напишите свой номер",moduleInputContactInfo.focus(),e.preventDefault()}),moduleStepTwoArrowBack.addEventListener("click",e=>{moduleStepOne.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),e.preventDefault()}),moduleStepThreeArrowBack.addEventListener("click",e=>{moduleStepTwo.classList.remove("hidden"),moduleStepOne.classList.add("hidden"),moduleStepThree.classList.add("hidden"),e.preventDefault()}),e.preventDefault()}),viberBtn.addEventListener("click",e=>{""===moduleQuestionTextarea.value?(moduleQuestionTextarea.classList.add("bg-danger"),moduleQuestionTextarea.focus(),moduleQuestionTextarea.addEventListener("keyup",function(e){""!==e.target.value?moduleQuestionTextarea.classList.remove("bg-danger"):moduleQuestionTextarea.classList.add("bg-danger")})):(moduleStepOne.classList.add("hidden"),moduleStepTwo.classList.remove("hidden"),moduleStepTwoTitle.innerHTML="Viber"),moduleBtnCall.addEventListener("click",e=>{moduleStepThree.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepThreeTitle.innerHTML="Viber / Позвонить",moduleLabelEnterContactInfo.innerHTML="Напишите свой номер",moduleInputContactInfo.focus(),e.preventDefault()}),moduleBtnMessage.addEventListener("click",e=>{moduleStepThree.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepThreeTitle.innerHTML="Viber / Написать",moduleLabelEnterContactInfo.innerHTML="Напишите свой номер",moduleInputContactInfo.focus(),e.preventDefault()}),moduleStepTwoArrowBack.addEventListener("click",e=>{moduleStepOne.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),e.preventDefault()}),moduleStepThreeArrowBack.addEventListener("click",e=>{moduleStepTwo.classList.remove("hidden"),moduleStepOne.classList.add("hidden"),moduleStepThree.classList.add("hidden"),e.preventDefault()}),e.preventDefault()}),vkBtn.addEventListener("click",e=>{""===moduleQuestionTextarea.value?(moduleQuestionTextarea.classList.add("bg-danger"),moduleQuestionTextarea.focus(),moduleQuestionTextarea.addEventListener("keyup",function(e){""!==e.target.value?moduleQuestionTextarea.classList.remove("bg-danger"):moduleQuestionTextarea.classList.add("bg-danger")})):(moduleStepOne.classList.add("hidden"),moduleStepTwo.classList.remove("hidden"),moduleStepTwoTitle.innerHTML="VK"),moduleBtnCall.addEventListener("click",e=>{moduleStepThree.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepThreeTitle.innerHTML="VK / Позвонить",moduleLabelEnterContactInfo.innerHTML="Напишите свой номер",moduleInputContactInfo.focus(),e.preventDefault()}),moduleBtnMessage.addEventListener("click",e=>{moduleStepThree.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepThreeTitle.innerHTML="VK / Написать",moduleLabelEnterContactInfo.innerHTML="Напишите свой номер",moduleInputContactInfo.focus(),e.preventDefault()}),moduleStepTwoArrowBack.addEventListener("click",e=>{moduleStepOne.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),e.preventDefault()}),moduleStepThreeArrowBack.addEventListener("click",e=>{moduleStepTwo.classList.remove("hidden"),moduleStepOne.classList.add("hidden"),moduleStepThree.classList.add("hidden"),e.preventDefault()}),e.preventDefault()}),phoneBtn.addEventListener("click",e=>{""===moduleQuestionTextarea.value?(moduleQuestionTextarea.classList.add("bg-danger"),moduleQuestionTextarea.focus(),moduleQuestionTextarea.addEventListener("keyup",function(e){""!==e.target.value?moduleQuestionTextarea.classList.remove("bg-danger"):moduleQuestionTextarea.classList.add("bg-danger")})):(moduleStepOne.classList.add("hidden"),moduleStepThree.classList.remove("hidden"),moduleStepThreeTitle.innerHTML="Позвонить",moduleLabelEnterContactInfo.innerHTML="Напишите свой номер",moduleInputContactInfo.focus()),moduleStepThreeArrowBack.addEventListener("click",e=>{moduleStepOne.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepThree.classList.add("hidden"),e.preventDefault()}),e.preventDefault()}),emailBtn.addEventListener("click",e=>{""===moduleQuestionTextarea.value?(moduleQuestionTextarea.classList.add("bg-danger"),moduleQuestionTextarea.focus(),moduleQuestionTextarea.addEventListener("keyup",function(e){""!==e.target.value?moduleQuestionTextarea.classList.remove("bg-danger"):moduleQuestionTextarea.classList.add("bg-danger")})):(moduleStepOne.classList.add("hidden"),moduleStepThree.classList.remove("hidden"),moduleStepThreeTitle.innerHTML="Написать",moduleLabelEnterContactInfo.innerHTML="Напишите свой e-mail",moduleInputContactInfo.placeholder="example@gmail.com",moduleInputContactInfo.type="email",moduleInputContactInfo.focus()),moduleStepThreeArrowBack.addEventListener("click",e=>{moduleStepOne.classList.remove("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepThree.classList.add("hidden"),e.preventDefault()}),e.preventDefault()}),moduleBtnSubmit.addEventListener("click",function e(t){if("email"===moduleInputContactInfo.type)if(""===moduleInputContactInfo.value)moduleInputContactInfo.classList.add("bg-danger"),setTimeout(()=>{moduleInputContactInfo.classList.remove("bg-danger")},1500);else{moduleStepThree.classList.add("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepOne.classList.add("hidden"),moduleStepSuccess.classList.remove("hidden");const t=moduleQuestionTextarea.value.trim(),n=moduleStepThreeTitle.innerText.trim(),o=moduleInputContactInfo.value.trim(),r=ga.getAll()[0].get("clientId"),s={question:t,contactWay:n,contact:o,userCity:userCity,userCountry:userCountry,googleClientId:r,userDevice:userDevice,utmSource:utmSource,utmMedium:utmMedium,utmCampaign:utmCampaign,utmContent:utmContent,utmTerm:utmTerm};sumbitData(s),setTimeout(()=>{moduleStepSuccess.classList.add("hidden"),btnAskQuestion.classList.remove("hidden"),oneMoreQuestionText.innerText="ещё один";const t=sectionAskQuestionsInner.innerHTML;sectionAskQuestionsInner.innerHTML="Спасибо! Мы с вами свяжемся!",setTimeout(()=>{sectionAskQuestionsInner.innerHTML=t},3e3),moduleQuestions.classList.add("hidden"),document.body.classList.remove("dark-overlay"),moduleBtnSubmit.removeEventListener("click",e)},3e3)}else if(""!==moduleInputContactInfo.value.trim()&&moduleInputContactInfo.value.trim().match(numValidation)){moduleStepThree.classList.add("hidden"),moduleStepTwo.classList.add("hidden"),moduleStepOne.classList.add("hidden"),moduleStepSuccess.classList.remove("hidden"),moduleStepSuccess.classList.add("showed");const t=moduleQuestionTextarea.value.trim(),n=moduleStepThreeTitle.innerText.trim(),o=moduleInputContactInfo.value.trim(),r=ga.getAll()[0].get("clientId"),s={question:t,contactWay:n,contact:o,userCity:userCity,userCountry:userCountry,googleClientId:r,userDevice:userDevice,utmSource:utmSource,utmMedium:utmMedium,utmCampaign:utmCampaign,utmContent:utmContent,utmTerm:utmTerm};sumbitData(s),setTimeout(()=>{moduleStepSuccess.classList.add("hidden"),btnAskQuestion.classList.remove("hidden"),moduleStepSuccess.classList.remove("showed"),oneMoreQuestionText.innerText="ещё один";const t=sectionAskQuestionsInner.innerHTML;sectionAskQuestionsInner.innerHTML="Спасибо! Мы с вами свяжемся!",setTimeout(()=>{sectionAskQuestionsInner.innerHTML=t},3e3),moduleQuestions.classList.add("hidden"),document.body.classList.remove("dark-overlay"),moduleBtnSubmit.removeEventListener("click",e)},3e3)}else moduleInputContactInfo.classList.add("bg-danger"),"email"===moduleInputContactInfo.type||moduleInputContactInfo.addEventListener("keyup",e=>{""!==moduleInputContactInfo.value.trim()&&moduleInputContactInfo.value.trim().match(numValidation)?moduleInputContactInfo.classList.remove("bg-danger"):moduleInputContactInfo.classList.add("bg-danger"),e.preventDefault()});t.preventDefault()}),e.preventDefault()});const carouselItems=[carouselImgGroupOne,carouselImgGroupTwo,carouselImgGroupThree];let i=0;carouselBtnRight.addEventListener("click",e=>{i>2&&(i=0),i<0&&(i=2),carouselItems[i].classList.add("hidden"),carouselItems[i+1>2?0:i+1].classList.remove("hidden"),carouselItems[i-1<0?2:i-1].classList.add("hidden"),i++,e.preventDefault()}),carouselBtnLeft.addEventListener("click",e=>{i<0&&(i=2),i>2&&(i=0),carouselItems[i].classList.add("hidden"),
carouselItems[i+1>2?0:i+1].classList.add("hidden"),carouselItems[i-1<0?2:i-1].classList.remove("hidden"),i--,e.preventDefault()}),ctaSubmitBtn.addEventListener("click",e=>{const t=inputSelectChooseProgrammInnerText.innerText.trim(),n=inputSelectChooseUniInnerText.innerText.trim(),o=phoneInputInnerText.value.trim(),r=userInputNameText.value.trim(),s=ga.getAll()[0].get("clientId"),d={field:t,uni:n,number:o,userName:r,userCity:userCity,userCountry:userCountry,googleClientId:s,userDevice:userDevice,utmSource:utmSource,utmMedium:utmMedium,utmCampaign:utmCampaign,utmContent:utmContent,utmTerm:utmTerm};if(""!==o&&o.match(numValidation)){const e=document.getElementById("js-app-is-submitted");e.classList.add("showed"),document.getElementById("step-success-row__back-to-main").addEventListener("click",t=>{e.classList.add("removing"),setTimeout(()=>{e.classList.remove("showed"),e.classList.remove("removing")},300),t.preventDefault()}),sumbitData(d)}else phoneInputInnerText.classList.add("bg-danger"),phoneInputInnerText.addEventListener("keyup",e=>{""!==phoneInputInnerText.value.trim()&&phoneInputInnerText.value.trim().match(numValidation)?phoneInputInnerText.classList.remove("bg-danger"):phoneInputInnerText.classList.add("bg-danger"),e.preventDefault()});e.preventDefault()}),phoneInputInnerText.addEventListener("keydown",e=>{const t=phoneInputInnerText.value.trim();""!==t&&t.match(numValidation)&&userNameInput.classList.add("showed")});