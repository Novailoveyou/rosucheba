// CTA btns
const ctaSubmitBtn = document.getElementById('cta-submit-application')

const btnAskQuestion = document.getElementById('section-ask-questions')
const moduleQuestions = document.getElementById('module-questions')
const moduleQuestionTextarea = document.getElementById(
  'js-text-input-ask-anything'
)

const sectionAskQuestionsInner = document.getElementById('cta-ask-question')

const oneMoreQuestionText = document.getElementById('one-more-question')

const moduleHorizontalCloseBtn = document.getElementById(
  'js-btn-horizontal-line-close'
)

const menuToggler = document.getElementById('menu-toggle')

const inputSelectChooseUni = document.getElementById('input-select-choose-uni')

const inputSelectChooseUniInnerText = document.getElementById(
  'input-select-choose-uni-inner-text'
)

const inputSelectChooseProgramm = document.getElementById(
  'input-select-choose-programm'
)

const inputSelectChooseProgrammInnerText = document.getElementById(
  'input-select-choose-programm-inner-text'
)

const inputSelectChooseUniDropdown = document.getElementById(
  'input-select-choose-uni-dropdown'
)

const inputSelectChooseProgrammDropdown = document.getElementById(
  'input-select-choose-programm-dropdown'
)

const inputSelectChooseProgrammDropdownStepTwo = document.getElementById(
  'input-select-choose-programm-dropdown--step-two'
)

const dropDownUniItems = document.querySelectorAll(
  '.input-select-choose-uni-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item'
)

const dropDownUniItemsP = document.querySelectorAll(
  '.input-select-choose-uni-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item p'
)

const dropDownProgrammItems = document.querySelectorAll(
  '.input-select-choose-programm-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item'
)

const dropDownProgrammItemsP = document.querySelectorAll(
  '.input-select-choose-programm-dropdown .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item p'
)

const dropDownProgrammItemsStepTwo = document.querySelectorAll(
  '.input-select-choose-programm-dropdown--step-two .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item'
)

const dropDownProgrammItemsPStepTwo = document.querySelectorAll(
  '.input-select-choose-programm-dropdown--step-two .inner-dropdown__inner-dropdown-items .inner-dropdown-items__item p'
)

const selectedItemFromTheFirstStep = document.getElementById(
  'inner-dropdown-items__item--selected'
)

const phoneInputInnerText = document.getElementById('phone-number')

const userInputNameText = document.getElementById('user-name')

const navItemLinks = document.querySelectorAll('.nav-item__link')
const navItemLinksArr = Array.from(navItemLinks)

const dropDownItemUniIcons = document.querySelectorAll(
  '.inner-dropdown-items__item-uni__icon'
)
const dropDownItemUniIconsArr = Array.from(dropDownItemUniIcons)

const dropDownItemProgrammIcons = document.querySelectorAll(
  '.inner-dropdown-items__item-programm__icon'
)
const dropDownItemProgrammIconsArr = Array.from(dropDownItemProgrammIcons)

// Module Ask Question -> Steps
const moduleStepOne = document.getElementById('module-questions__step-one')
const moduleStepTwo = document.getElementById('module-questions__step-two')
const moduleStepThree = document.getElementById('module-questions__step-three')
const moduleStepSuccess = document.getElementById(
  'module-questions__step-success'
)

// Module Ask Question -> Step 1 -> SM Buttons
const telegramBtn = document.getElementById('sm-icons__link--telegram')
const whatsappBtn = document.getElementById('sm-icons__link--whatsapp')
const viberBtn = document.getElementById('sm-icons__link--viber')
const vkBtn = document.getElementById('sm-icons__link--vk')
const phoneBtn = document.getElementById('sm-icons__link--phone')
const emailBtn = document.getElementById('sm-icons__link--email')

// Module Ask Question -> Step 2 -> Btns
const moduleBtnCall = document.getElementById('question-module__radio-call')
const moduleBtnMessage = document.getElementById(
  'question-module__radio-message'
)

// Module Ask Question -> Step 2, Step 3 -> Titles
const moduleStepTwoTitle = document.getElementById('module-step-two-title')
const moduleStepThreeTitle = document.getElementById('module-step-three-title')

// Module Ask Question -> Step 2, Step 3 -> Arrows Back
const moduleStepTwoArrowBack = document.getElementById(
  'step-two-arrow-step-back'
)
const moduleStepThreeArrowBack = document.getElementById(
  'step-three-arrow-step-back'
)

// Module Ask Question -> Step 3 -> Contact input
const moduleLabelEnterContactInfo = document.getElementById(
  'module-label-enter-contact-info'
)
const moduleInputContactInfo = document.getElementById(
  'module-input-contact-info'
)

// Module Ask Question -> Step Success -> Submit
const moduleBtnSubmit = document.getElementById('module_questions-submit-btn')

const carouselBtnLeft = document.getElementById('carrousel-arrow-left-btn')
const carouselBtnRight = document.getElementById('carrousel-arrow-right-btn')

const carouselImgGroupOne = document.getElementById('content__img-group--1')
const carouselImgGroupTwo = document.getElementById('content__img-group--2')
const carouselImgGroupThree = document.getElementById('content__img-group--3')

const svgCheckMark = `<svg
      class="inner-dropdown-items-programm__item__icon"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.57331 8.62947C3.61787 8.69409 3.67213 8.75362 3.73587 8.80587C4.10173 9.10576 4.64142 9.05228 4.94131 8.68643L10.9143 1.39957C11.2142 1.03371 11.1607 0.494021 10.7948 0.194132C10.429 -0.105757 9.88928 -0.05228 9.58939 0.313576L4.25631 6.81979L1.49654 3.71731C1.18213 3.36385 0.640721 3.3322 0.287266 3.64661C-0.0661882 3.96102 -0.09784 4.50243 0.216571 4.85589L3.57331 8.62947Z"
        fill="#fff"
      />
    </svg>`

const scrollToTheApplicationBtn = document.getElementById(
  'cta-scroll-to-submit-application'
)

const fillInTheFieldsBelow = document.getElementById('fill-in-fields')

const userNameInput = document.getElementById('container-input--user-name')

const insertAfterLiStepTwo = document.getElementById(
  'js-insert-after--step-two'
)

const numValidation = /^[0-9()-.+ ]+$/

const locationDependedHeading = document.getElementById(
  'location-depended-heading'
)

const customizedCountryText = document.getElementById('customizedCountryText')

const userDevice = window.navigator.userAgent

// UTM PARAMS
const queryString = window.location.search

const urlParams = new URLSearchParams(queryString)

const utmSource = urlParams.get('utm_source')
const utmMedium = urlParams.get('utm_medium')
const utmCampaign = urlParams.get('utm_campaign')
const utmContent = urlParams.get('utm_content')
const utmTerm = urlParams.get('utm_term')

// Track IP

// let user_location;
// fetch("https://www.cloudflare.com/cdn-cgi/trace")
//   .then((data) => data.json())
//   .then((data) => {
//     user_location = data;
//     console.log(user_location);
//   });
// let userLocation;

const locationUrlAPI = 'https://ipinfo.io?token=b16e76b622236e'
// const locationUrlAPI = '';
// let locationUrlAPI = 'https://ipapi.co/8.8.8.8/json/';
// let locationUrlAPI = 'http://ip-api.com/json'; // no https
// let locationUrlAPI = 'https://api.ipify.org/?format=json';

let userCity
let userCountry
let userCountryCode // KZ, RU, UZ
fetch(locationUrlAPI)
  .then(data => data.json())
  .then(data => {
    // console.log(data);
    userCity = data.city
    userCountry = data.country
    userCountryCode = data.country
    if (userCountry === 'RU') {
      userCountry = 'Russia'
    } else if (userCountry === 'KZ') {
      userCountry = 'Kazakhstan'
    } else if (userCountry == 'UZ') {
      userCountry = 'Uzbekistan'
    }

    // console.log(data);
    // // console.log(locationDependedHeading);
    // // console.log(userCountryCode);
    changeLocationDependedHeading(
      locationDependedHeading,
      'дистанционно в вузах Москвы',
      'дистанционно в вузах Москвы без ЕГЭ',
      'дистанционно в вузах Москвы без ЕНТ и ЕГЭ',
      'дистанционно в вузах Москвы без ЕНТ и ЕГЭ'
    )

    changeCustomizedCountryText(
      '— мы помогаем абитуриентам выбирать образование, а Московским учебным заведениям — находить своих студентов!',
      '— мы помогаем абитуриентам из Казахстана выбирать образование, а Московским учебным заведениям — находить своих студентов!',
      '— мы помогаем абитуриентам из Узбекистана выбирать образование, а Московским учебным заведениям — находить своих студентов!',
      '— мы помогаем абитуриентам выбирать образование, а Московским учебным заведениям — находить своих студентов!'
    )
  })
  .catch(error => {
    // `Can't access ${locationUrlAPI} :(`;
    changeLocationDependedHeading(
      locationDependedHeading,
      'дистанционно в вузах Москвы',
      'дистанционно в вузах Москвы без ЕГЭ',
      'дистанционно в вузах Москвы без ЕНТ и ЕГЭ',
      'дистанционно в вузах Москвы без ЕНТ и ЕГЭ'
    )

    changeCustomizedCountryText(
      '— мы помогаем абитуриентам выбирать образование, а Московским учебным заведениям — находить своих студентов!',
      '— мы помогаем абитуриентам из Казахстана выбирать образование, а Московским учебным заведениям — находить своих студентов!',
      '— мы помогаем абитуриентам из Узбекистана выбирать образование, а Московским учебным заведениям — находить своих студентов!',
      '— мы помогаем абитуриентам выбирать образование, а Московским учебным заведениям — находить своих студентов!'
    )
    return
  })

function changeLocationDependedHeading(
  textBefore = '',
  textAfterRU = '',
  textAfterKZ = '',
  textAfterUZ = '',
  textFallback = ''
) {
  if (userCountryCode === 'RU') {
    textBefore.innerText = textAfterRU
  } else if (userCountryCode === 'KZ') {
    textBefore.innerText = textAfterKZ
  } else if (userCountryCode === 'UZ') {
    textBefore.innerText = textAfterUZ
  } else {
    textBefore.innerText = textFallback
  }
}

function changeCustomizedCountryText(
  textAfterRU = '',
  textAfterKZ = '',
  textAfterUZ = '',
  textFallback = ''
) {
  if (userCountryCode === 'RU') {
    customizedCountryText.innerText = textAfterRU
  } else if (userCountryCode === 'KZ') {
    customizedCountryText.innerText = textAfterKZ
  } else if (userCountryCode === 'UZ') {
    customizedCountryText.innerText = textAfterUZ
  } else {
    customizedCountryText.innerText = textFallback
  }
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

function dropDownStepTwoInsertItem(text = '') {
  let el
  el = document.createElement('li')
  el.classList.add('inner-dropdown-items__item')
  el.innerHTML = `
        <p>
          ${svgCheckMark}
          ${text}
        </p>
      `
  insertAfter(insertAfterLiStepTwo, el)
}

let isSumbitted = false

function checkForUniqueUserNum() {
  const userNum = document.getElementById('pop-up-form-number').value
  const userNum2 = document.getElementById('phone-number').value
  const userNum3 = document.getElementById('number-contact-form').value
  const userNum4 = document.getElementById('module-input-contact-info').value
  const numArr = [userNum, userNum2, userNum3, userNum4]
  const localStorageNum = JSON.parse(localStorage.getItem('userNum'))
  let userNumCur
  let output

  numArr.forEach(num => {
    if (num !== '') {
      userNumCur = num
    }
  })

  if (
    localStorageNum === null ||
    localStorageNum.toString() !== userNumCur.toString()
  ) {
    localStorage.setItem('userNum', JSON.stringify(userNumCur))
    // console.log(userNumCur)
    output = 'Нет'
  } else if (localStorageNum.toString() === userNumCur.toString()) {
    output = 'Да'
  }

  return output
}

// Send to email
async function sumbitData(data) {
  if (isSumbitted === false) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const content = await res.json()
    isSumbitted = true

    // Prevent spamming
    setTimeout(() => {
      isSumbitted = false
    }, 5000)
  } else {
    return
  }
}

// Menu
navItemLinks[0].addEventListener('click', e => {
  // window.location = "#about";
  const aboutSection = document.getElementById('about')
  aboutSection.scrollIntoView({
    behavior: 'smooth'
  })
  menuToggler.checked = false
  e.preventDefault()
})

navItemLinks[1].addEventListener('click', e => {
  // window.location = "#partners";
  const partnersSection = document.getElementById('partners')
  partnersSection.scrollIntoView({
    behavior: 'smooth'
  })
  menuToggler.checked = false
  e.preventDefault()
})

navItemLinks[2].addEventListener('click', e => {
  // window.location = "#trusted-by";
  const trustedBySection = document.getElementById('trusted-by')
  trustedBySection.scrollIntoView({
    behavior: 'smooth'
  })
  menuToggler.checked = false
  e.preventDefault()
})

// Select Dropdown Uni
inputSelectChooseUni.addEventListener('click', e => {
  inputSelectChooseUniDropdown.classList.toggle('show-dropdown')

  // window.location = '#input-select-choose-uni';
  if (
    inputSelectChooseUniDropdown.classList.contains('show-dropdown') &&
    document.body.clientWidth < 768
  ) {
    inputSelectChooseUni.scrollIntoView({
      behavior: 'smooth'
    })
  }

  document.body.addEventListener('click', function closeInputUniDropDown(e) {
    if (
      inputSelectChooseUniDropdown.classList.contains('show-dropdown') &&
      !inputSelectChooseUniDropdown.contains(e.target) &&
      e.target !== inputSelectChooseUniDropdown &&
      !inputSelectChooseUni.contains(e.target) &&
      e.target !== inputSelectChooseUni
    ) {
      // Close question module
      inputSelectChooseUniDropdown.classList.toggle('show-dropdown')
      document.body.removeEventListener('click', closeInputUniDropDown)
    }
  })

  e.preventDefault()
})

scrollToTheApplicationBtn.addEventListener('click', e => {
  fillInTheFieldsBelow.classList.remove('hidden')

  if (document.body.clientWidth < 768) {
    fillInTheFieldsBelow.scrollIntoView({
      behavior: 'smooth'
    })
  } else {
    const mainHeading = document.getElementById('js-section-heading')
    mainHeading.scrollIntoView({
      behavior: 'smooth'
    })
  }

  setTimeout(() => {
    fillInTheFieldsBelow.classList.add('hidden')
  }, 3000)

  e.preventDefault()
})

// Dropdown Uni
inputSelectChooseUniDropdown.addEventListener('mousedown', e => {
  // Convert Dropdown Uni items into an array
  const dropDownUniItemsArr = Array.from(dropDownUniItems)
  const dropDownUniItemsArrP = Array.from(dropDownUniItemsP)

  // Add the color to the selected text in the dropdown and clean the colors from other elements
  dropDownUniItemsArr.forEach(item => {
    item.classList.remove('text-highlight--color')
  })
  dropDownUniItemsArrP.forEach(item => {
    item.classList.remove('text-highlight--color')
  })

  // Change the inner text of the select to the selected text
  if (e.target.tagName === 'svg') {
    inputSelectChooseUniInnerText.innerText = e.target.parentElement.innerText

    inputSelectChooseUniInnerText.innerText =
      inputSelectChooseUniInnerText.innerText
        .substring(inputSelectChooseUniInnerText.innerText.indexOf('(') + 1)
        .slice(0, -1)

    e.target.parentElement.classList.add('text-highlight--color')
  } else if (e.target.tagName == 'path') {
    inputSelectChooseUniInnerText.innerText =
      e.target.parentElement.parentElement.innerText

    inputSelectChooseUniInnerText.innerText =
      inputSelectChooseUniInnerText.innerText
        .substring(inputSelectChooseUniInnerText.innerText.indexOf('(') + 1)
        .slice(0, -1)

    e.target.parentElement.parentElement.classList.add('text-highlight--color')
  } else {
    inputSelectChooseUniInnerText.innerText = e.target.innerText

    inputSelectChooseUniInnerText.innerText =
      inputSelectChooseUniInnerText.innerText
        .substring(inputSelectChooseUniInnerText.innerText.indexOf('(') + 1)
        .slice(0, -1)

    e.target.classList.add('text-highlight--color')
  }

  // Add the color to the selected text in the input
  inputSelectChooseUniInnerText.classList.add('text-highlight--color')

  // On select hide the module
  inputSelectChooseUniDropdown.classList.toggle('show-dropdown')

  e.preventDefault()
})

// Select Dropdown Programm
inputSelectChooseProgramm.addEventListener('click', e => {
  if (
    inputSelectChooseProgrammDropdownStepTwo.classList.contains('show-dropdown')
  ) {
    inputSelectChooseProgrammDropdownStepTwo.classList.remove('show-dropdown')
    inputSelectChooseProgrammDropdown.classList.remove('show-dropdown')
  } else {
    inputSelectChooseProgrammDropdownStepTwo.classList.remove('show-dropdown')
    inputSelectChooseProgrammDropdown.classList.toggle('show-dropdown')
  }

  // window.location = '#input-select-choose-uni';
  if (
    inputSelectChooseProgrammDropdown.classList.contains('show-dropdown') &&
    document.body.clientWidth < 768
  ) {
    inputSelectChooseProgrammInnerText.scrollIntoView({
      behavior: 'smooth'
    })
  }

  document.body.addEventListener(
    'click',
    function closeInputProgrammDropDown(e) {
      if (
        (inputSelectChooseProgrammDropdown.classList.contains(
          'show-dropdown'
        ) ||
          inputSelectChooseProgrammDropdownStepTwo.classList.contains(
            'show-dropdown'
          )) &&
        !inputSelectChooseProgrammDropdown.contains(e.target) &&
        e.target !== inputSelectChooseProgrammDropdown &&
        !inputSelectChooseProgramm.contains(e.target) &&
        e.target !== inputSelectChooseProgrammDropdownStepTwo &&
        !inputSelectChooseProgrammDropdownStepTwo.contains(e.target) &&
        e.target !== inputSelectChooseProgramm &&
        !selectedItemFromTheFirstStep.contains(e.target) &&
        e.target !== selectedItemFromTheFirstStep
      ) {
        // Close question module
        inputSelectChooseProgrammDropdown.classList.remove('show-dropdown')
        inputSelectChooseProgrammDropdownStepTwo.classList.remove(
          'show-dropdown'
        )
        document.body.removeEventListener('click', closeInputProgrammDropDown)
      }
    }
  )

  e.preventDefault()
})

// Dropdown Programm
inputSelectChooseProgrammDropdown.addEventListener('click', e => {
  const dropDownProgrammItemsArr = Array.from(dropDownProgrammItems)
  const dropDownProgrammItemsArrP = Array.from(dropDownProgrammItemsP)

  dropDownProgrammItemsArr.forEach(item => {
    item.classList.remove('text-highlight--color')
  })
  dropDownProgrammItemsArrP.forEach(item => {
    item.classList.remove('text-highlight--color')
  })

  // Change the inner text of the select to the selected text
  if (e.target.tagName === 'svg') {
    inputSelectChooseProgrammInnerText.innerText =
      e.target.parentElement.innerText
    e.target.parentElement.classList.add('text-highlight--color')
  } else if (e.target.tagName == 'path') {
    inputSelectChooseProgrammInnerText.innerText =
      e.target.parentElement.parentElement.innerText
    e.target.parentElement.parentElement.classList.add('text-highlight--color')
  } else {
    inputSelectChooseProgrammInnerText.innerText = e.target.innerText
    e.target.classList.add('text-highlight--color')
  }

  // Add the color to the selected text in the input
  inputSelectChooseProgrammInnerText.classList.add('text-highlight--color')

  // Dropdown Programm Step 2

  if (
    inputSelectChooseProgrammInnerText.innerText ===
    'Определюсь после консультации'
  ) {
    inputSelectChooseProgrammDropdownStepTwo.classList.remove('show-dropdown')
  } else {
    inputSelectChooseProgrammDropdownStepTwo.classList.add('show-dropdown')

    const selectedItemFromTheFirstStepText = document.getElementById(
      'programm-dropdown-step-two-selected-step-one-item'
    )

    const selectedItemFromTheFirstStep = document.getElementById(
      'inner-dropdown-items__item--selected'
    )

    selectedItemFromTheFirstStepText.innerText =
      inputSelectChooseProgrammInnerText.innerText

    const listItemsStepTwo = document.getElementById(
      'inner-dropdown-items--step-two'
    )

    const svgArrowBack = `<svg
    width="9"
    height="15"
    viewBox="0 0 9 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.20471 13.2882L2.41412 7.49765L8.20471 1.70706C8.5953 1.31647 8.5953 0.683529 8.20471 0.292941C7.81412 -0.097647 7.18118 -0.097647 6.79059 0.292941L0.292941 6.79059C-0.0976471 7.18118 -0.0976471 7.81412 0.292941 8.2047L6.79059 14.7024C7.18118 15.0929 7.81412 15.0929 8.20471 14.7024C8.5953 14.3118 8.5953 13.6788 8.20471 13.2882Z"
      fill="#2874FF"
    />
  </svg>`

    if (selectedItemFromTheFirstStepText.innerText === 'Колледж') {
      const listItemsStepTwoArr = Array.prototype.slice.call(
        listItemsStepTwo.childNodes
      )

      listItemsStepTwoArr.forEach((item, index) => {
        if (index > 3) {
          item.remove()
        }
      })

      dropDownStepTwoInsertItem('Информационные системы и программирование')

      dropDownStepTwoInsertItem('Гостиничное дело​')

      dropDownStepTwoInsertItem('Банковское дело​​')

      dropDownStepTwoInsertItem('Экономика и бухгалтерский учет по отраслям')

      dropDownStepTwoInsertItem('Право и организация социального обеспечения')

      dropDownStepTwoInsertItem('Коммерция по отраслям')
    }

    if (selectedItemFromTheFirstStepText.innerText === 'Бакалавриат') {
      const listItemsStepTwoArr = Array.prototype.slice.call(
        listItemsStepTwo.childNodes
      )

      listItemsStepTwoArr.forEach((item, index) => {
        if (index > 3) {
          item.remove()
        }
      })

      dropDownStepTwoInsertItem('Юриспруденция')

      dropDownStepTwoInsertItem('Дизайн​')

      dropDownStepTwoInsertItem('Лингвистика')

      dropDownStepTwoInsertItem('Информационные системы и технологии')

      dropDownStepTwoInsertItem('Прикладная информатика')

      dropDownStepTwoInsertItem('Реклама и связи с общественностью')

      dropDownStepTwoInsertItem('Бизнес-информатика')

      dropDownStepTwoInsertItem('Государственное и муниципальное управление')

      dropDownStepTwoInsertItem('Управление персоналом')

      dropDownStepTwoInsertItem('Теплоэнергетика и теплотехника')

      dropDownStepTwoInsertItem('Электроэнергетика и электротехника')

      dropDownStepTwoInsertItem('Строительство')

      dropDownStepTwoInsertItem('Психолого-педагогическое образование')

      dropDownStepTwoInsertItem('Психология')

      dropDownStepTwoInsertItem('Менеджмент')

      dropDownStepTwoInsertItem('Экономика')
    }

    if (selectedItemFromTheFirstStepText.innerText === 'Специалитет') {
      const listItemsStepTwoArr = Array.prototype.slice.call(
        listItemsStepTwo.childNodes
      )

      listItemsStepTwoArr.forEach((item, index) => {
        if (index > 3) {
          item.remove()
        }
      })

      dropDownStepTwoInsertItem('Экономическая безопасность')
    }

    if (selectedItemFromTheFirstStepText.innerText === 'Магистратура') {
      const listItemsStepTwoArr = Array.prototype.slice.call(
        listItemsStepTwo.childNodes
      )

      listItemsStepTwoArr.forEach((item, index) => {
        if (index > 3) {
          item.remove()
        }
      })

      dropDownStepTwoInsertItem('Юриспруденция')

      dropDownStepTwoInsertItem('Реклама и связи с общественностью')

      dropDownStepTwoInsertItem('Психология')

      dropDownStepTwoInsertItem('Прикладная информатика')

      dropDownStepTwoInsertItem('Государственное и муниципальное управление')

      dropDownStepTwoInsertItem('Управление персоналом')

      dropDownStepTwoInsertItem('Менеджмент')

      dropDownStepTwoInsertItem('Финансы и кредит')

      dropDownStepTwoInsertItem('Экономика')
    }

    if (
      selectedItemFromTheFirstStepText.innerText ===
      'Профессиональная переподготовка'
    ) {
      const listItemsStepTwoArr = Array.prototype.slice.call(
        listItemsStepTwo.childNodes
      )

      listItemsStepTwoArr.forEach((item, index) => {
        if (index > 3) {
          item.remove()
        }
      })

      dropDownStepTwoInsertItem('Гуманитарные науки')

      dropDownStepTwoInsertItem('Электроэнергетика')

      dropDownStepTwoInsertItem('Строительство')

      dropDownStepTwoInsertItem('Теплоэнергетика')

      dropDownStepTwoInsertItem('Безопасность дорожного движения')

      dropDownStepTwoInsertItem('Продукты питания - технология производства')

      dropDownStepTwoInsertItem('Юриспруденция')

      dropDownStepTwoInsertItem('Охрана труда')

      dropDownStepTwoInsertItem('Информатика и вычислительная техника')

      dropDownStepTwoInsertItem('Реклама и PR')

      dropDownStepTwoInsertItem('Журналистика')

      dropDownStepTwoInsertItem('Дизайн')

      dropDownStepTwoInsertItem('Маркетинг')

      dropDownStepTwoInsertItem('Туризм')

      dropDownStepTwoInsertItem('Государственное и муниципальное управление')

      dropDownStepTwoInsertItem('Логистика')

      dropDownStepTwoInsertItem('Социальная работа')

      dropDownStepTwoInsertItem('Экономика')

      dropDownStepTwoInsertItem('Психология')

      dropDownStepTwoInsertItem('Педагогика')

      dropDownStepTwoInsertItem('Менеджмент')
    }

    if (
      selectedItemFromTheFirstStepText.innerText === 'Повышение квалификации'
    ) {
      const listItemsStepTwoArr = Array.prototype.slice.call(
        listItemsStepTwo.childNodes
      )

      listItemsStepTwoArr.forEach((item, index) => {
        if (index > 3) {
          item.remove()
        }
      })

      dropDownStepTwoInsertItem('Гуманитарные науки')

      dropDownStepTwoInsertItem('Электроэнергетика')

      dropDownStepTwoInsertItem('Строительство')

      dropDownStepTwoInsertItem('Теплоэнергетика')

      dropDownStepTwoInsertItem('Безопасность дорожного движения')

      dropDownStepTwoInsertItem('Продукты питания - технология производства')

      dropDownStepTwoInsertItem('Юриспруденция')

      dropDownStepTwoInsertItem('Охрана труда')

      dropDownStepTwoInsertItem('Информатика и вычислительная техника')

      dropDownStepTwoInsertItem('Реклама и PR')

      dropDownStepTwoInsertItem('Журналистика')

      dropDownStepTwoInsertItem('Дизайн')

      dropDownStepTwoInsertItem('Маркетинг')

      dropDownStepTwoInsertItem('Туризм')

      dropDownStepTwoInsertItem('Медицина')

      dropDownStepTwoInsertItem('Государственное и муниципальное управление')

      dropDownStepTwoInsertItem('Логистика')

      dropDownStepTwoInsertItem('Социальная работа​')

      dropDownStepTwoInsertItem('Экономика​​')

      dropDownStepTwoInsertItem('Психология')

      dropDownStepTwoInsertItem('Педагогика')

      dropDownStepTwoInsertItem('Менеджмент')
    }

    if (
      selectedItemFromTheFirstStepText.innerText ===
      'Master of Business Administration (МВА)'
    ) {
      const listItemsStepTwoArr = Array.prototype.slice.call(
        listItemsStepTwo.childNodes
      )

      listItemsStepTwoArr.forEach((item, index) => {
        if (index > 3) {
          item.remove()
        }
      })

      dropDownStepTwoInsertItem('MBA Industry')

      dropDownStepTwoInsertItem('MBA Professional')

      dropDownStepTwoInsertItem('MBA Intensive')

      dropDownStepTwoInsertItem('Mini-MBA')
    }

    // Step back
    selectedItemFromTheFirstStep.addEventListener('click', e => {
      inputSelectChooseProgrammDropdownStepTwo.classList.remove('show-dropdown')
      inputSelectChooseProgrammDropdown.classList.add('show-dropdown')

      e.preventDefault()
    })

    inputSelectChooseProgrammDropdownStepTwo.addEventListener('click', e => {
      const dropDownProgrammItemsStepTwoArr = Array.from(
        dropDownProgrammItemsStepTwo
      )
      const dropDownProgrammItemsPStepTwoArr = Array.from(
        dropDownProgrammItemsPStepTwo
      )

      dropDownProgrammItemsStepTwoArr.forEach(item => {
        item.classList.remove('text-highlight--color')
      })
      dropDownProgrammItemsPStepTwoArr.forEach(item => {
        item.classList.remove('text-highlight--color')
      })

      // Change the inner text of the select to the selected text
      if (e.target.tagName === 'svg') {
        // Make sure we don't insert a step back btn inner text into the div (that looks kinda like select input)
        inputSelectChooseProgrammInnerText.innerText ===
        e.target.parentElement.innerText
          ? inputSelectChooseProgrammInnerText.innerText
          : (inputSelectChooseProgrammInnerText.innerText = `${inputSelectChooseProgrammInnerText.innerHTML}, ${e.target.parentElement.innerText}`)

        e.target.parentElement.classList.add('text-highlight--color')
      } else if (e.target.tagName == 'path') {
        // Make sure we don't insert a step back btn inner text into the div (that looks kinda like select input)
        inputSelectChooseProgrammInnerText.innerText ===
        e.target.parentElement.parentElement.innerText
          ? inputSelectChooseProgrammInnerText.innerText
          : (inputSelectChooseProgrammInnerText.innerText = `${inputSelectChooseProgrammInnerText.innerText}, ${e.target.parentElement.parentElement.innerText}`)

        e.target.parentElement.parentElement.classList.add(
          'text-highlight--color'
        )
      } else {
        // Make sure we don't insert a step back btn inner text into the div (that looks kinda like select input)
        inputSelectChooseProgrammInnerText.innerText === e.target.innerText
          ? (inputSelectChooseProgrammInnerText.innerText =
              inputSelectChooseProgrammInnerText.innerText)
          : (inputSelectChooseProgrammInnerText.innerText = `${inputSelectChooseProgrammInnerText.innerText}, ${e.target.innerText}`)

        e.target.classList.add('text-highlight--color')
      }

      inputSelectChooseProgrammInnerText.innerHTML =
        inputSelectChooseProgrammInnerText.innerHTML.replace(/,\s*$/, '')

      if (document.body.clientWidth < 768) {
        inputSelectChooseProgrammInnerText.scrollIntoView({
          behavior: 'smooth'
        })
      }

      inputSelectChooseProgrammDropdownStepTwo.classList.remove('show-dropdown')
    })
  }

  // On select hide the module
  inputSelectChooseProgrammDropdown.classList.toggle('show-dropdown')

  e.preventDefault()
})

// Show ask question btn on the scroll position
// window.addEventListener('scroll', function showQuestionBtn(e) {
//   // console.log(window.scrollY);
//   if (window.scrollY >= 720 && window.scrollY <= 2000) {
//     btnAskQuestion.classList.remove('hidden');
//   } else {
//     btnAskQuestion.classList.add('hidden');
//   }

//   e.preventDefault();
// });

// Ask question clicked
btnAskQuestion.addEventListener('click', e => {
  // window.removeEventListener("scroll", showQuestionBtn);
  btnAskQuestion.classList.add('hidden')
  moduleQuestions.classList.remove('hidden')
  moduleStepOne.classList.remove('hidden')
  document.body.classList.add('dark-overlay')
  moduleQuestionTextarea.focus()

  document.body.addEventListener('click', function closeQuestionModule(e) {
    // moduleHorizontalCloseBtn
    if (
      (!btnAskQuestion.contains(e.target) &&
        e.target !== btnAskQuestion &&
        !moduleQuestions.contains(e.target) &&
        e.target !== moduleQuestions) ||
      (e.target === btnAskQuestion && btnAskQuestion.contains(e.target))
    ) {
      // Close question module
      btnAskQuestion.classList.remove('hidden')
      moduleQuestions.classList.add('hidden')
      moduleStepOne.classList.add('hidden')
      document.body.classList.remove('dark-overlay')
      document.body.removeEventListener('click', closeQuestionModule)
    }

    e.preventDefault()
  })

  // Telegram clicked
  telegramBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepTwo.classList.remove('hidden')

      moduleStepTwoTitle.innerHTML = 'Telegram'
    }

    // Telegram -> Call clicked
    moduleBtnCall.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Telegram / Позвонить'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Telegram -> Message clicked
    moduleBtnMessage.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Telegram / Написать'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Step 2 -> Arrow back
    moduleStepTwoArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      e.preventDefault()
    })

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepTwo.classList.remove('hidden')
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.add('hidden')
      e.preventDefault()
    })

    e.preventDefault()
  })

  // Whatsapp clicked
  whatsappBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepTwo.classList.remove('hidden')
      moduleStepTwoTitle.innerHTML = 'Whats App'
    }

    // Whatsapp -> Call clicked
    moduleBtnCall.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Whatsapp / Позвонить'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Whatsapp -> Message clicked
    moduleBtnMessage.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Whatsapp / Написать'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Step 2 -> Arrow back
    moduleStepTwoArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      e.preventDefault()
    })

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepTwo.classList.remove('hidden')
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.add('hidden')
      e.preventDefault()
    })

    e.preventDefault()
  })

  // Viber clicked
  viberBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepTwo.classList.remove('hidden')
      moduleStepTwoTitle.innerHTML = 'Viber'
    }

    // Viber -> Call clicked
    moduleBtnCall.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Viber / Позвонить'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Viber -> Message clicked
    moduleBtnMessage.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'Viber / Написать'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Step 2 -> Arrow back
    moduleStepTwoArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      e.preventDefault()
    })

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepTwo.classList.remove('hidden')
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.add('hidden')
      e.preventDefault()
    })

    e.preventDefault()
  })

  // Vk clicked
  vkBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepTwo.classList.remove('hidden')
      moduleStepTwoTitle.innerHTML = 'VK'
    }

    // VK -> Call clicked
    moduleBtnCall.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'VK / Позвонить'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // VK -> Message clicked
    moduleBtnMessage.addEventListener('click', e => {
      moduleStepThree.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      moduleStepThreeTitle.innerHTML = 'VK / Написать'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()

      e.preventDefault()
    })

    // Step 2 -> Arrow back
    moduleStepTwoArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')

      e.preventDefault()
    })

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepTwo.classList.remove('hidden')
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.add('hidden')
      e.preventDefault()
    })

    e.preventDefault()
  })

  // Phone button clicked
  phoneBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.remove('hidden')
      moduleStepThreeTitle.innerHTML = 'Позвонить'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой номер'
      moduleInputContactInfo.focus()
    }

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')
      moduleStepThree.classList.add('hidden')
      e.preventDefault()
    })

    e.preventDefault()
  })

  // Email button clicked
  emailBtn.addEventListener('click', e => {
    if (moduleQuestionTextarea.value === '') {
      moduleQuestionTextarea.classList.add('bg-danger')
      moduleQuestionTextarea.focus()
      moduleQuestionTextarea.addEventListener(
        'keyup',
        function highlightBgDanger(e) {
          e.target.value !== ''
            ? moduleQuestionTextarea.classList.remove('bg-danger')
            : moduleQuestionTextarea.classList.add('bg-danger')
        }
      )
    } else {
      moduleStepOne.classList.add('hidden')
      moduleStepThree.classList.remove('hidden')
      moduleStepThreeTitle.innerHTML = 'Написать'
      moduleLabelEnterContactInfo.innerHTML = 'Напишите свой e-mail'
      moduleInputContactInfo.placeholder = 'example@gmail.com'
      moduleInputContactInfo.type = 'email'
      moduleInputContactInfo.focus()
    }

    // Step 3 -> Arrow Back
    moduleStepThreeArrowBack.addEventListener('click', e => {
      moduleStepOne.classList.remove('hidden')
      moduleStepTwo.classList.add('hidden')
      moduleStepThree.classList.add('hidden')

      e.preventDefault()
    })

    e.preventDefault()
  })

  // Submit btn clicked
  moduleBtnSubmit.addEventListener('click', function submitQuestionModule(e) {
    if (moduleInputContactInfo.type === 'email') {
      // todo: validate email
      if (moduleInputContactInfo.value === '') {
        moduleInputContactInfo.classList.add('bg-danger')
        setTimeout(() => {
          moduleInputContactInfo.classList.remove('bg-danger')
        }, 1500)
      } else {
        moduleStepThree.classList.add('hidden')
        moduleStepTwo.classList.add('hidden')
        moduleStepOne.classList.add('hidden')
        moduleStepSuccess.classList.remove('hidden')

        // Submit
        const question = moduleQuestionTextarea.value.trim()
        const contactWay = moduleStepThreeTitle.innerText.trim()
        const contact = moduleInputContactInfo.value.trim()

        const googleClientId = ga.getAll()[0].get('clientId')

        let number
        let double = checkForUniqueUserNum()

        const data = {
          number,
          question,
          contactWay,
          contact,
          userCity,
          userCountry,
          googleClientId,
          userDevice,
          utmSource,
          utmMedium,
          utmCampaign,
          utmContent,
          utmTerm,
          double
        }

        if (
          data.contact !== '' &&
          data.contact !== null &&
          !data.contact.includes('@')
        ) {
          data.number = data.contact
          data.contact = '-'
        }

        sumbitData(data)

        setTimeout(() => {
          moduleStepSuccess.classList.add('hidden')
          btnAskQuestion.classList.remove('hidden')

          // console.log(sectionAskQuestionsInner.innerHTM);
          oneMoreQuestionText.innerText = 'ещё один'
          const sectionAskQuestionInnerSaver =
            sectionAskQuestionsInner.innerHTML
          // console.log(sectionAskQuestionInnerSaver);
          sectionAskQuestionsInner.innerHTML = 'Спасибо! Мы с вами свяжемся!'
          setTimeout(() => {
            sectionAskQuestionsInner.innerHTML = sectionAskQuestionInnerSaver
          }, 3000)

          moduleQuestions.classList.add('hidden')
          document.body.classList.remove('dark-overlay')
          // document.body.removeEventListener("click", closeQuestionModule);
          moduleBtnSubmit.removeEventListener('click', submitQuestionModule)
        }, 3000)
      }
    } else {
      if (
        moduleInputContactInfo.value.trim() !== '' &&
        moduleInputContactInfo.value.trim().match(numValidation)
      ) {
        moduleStepThree.classList.add('hidden')
        moduleStepTwo.classList.add('hidden')
        moduleStepOne.classList.add('hidden')
        moduleStepSuccess.classList.remove('hidden')

        moduleStepSuccess.classList.add('showed')

        // Submit
        const question = moduleQuestionTextarea.value.trim()
        const contactWay = moduleStepThreeTitle.innerText.trim()
        const contact = moduleInputContactInfo.value.trim()

        const googleClientId = ga.getAll()[0].get('clientId')

        let number
        let double = checkForUniqueUserNum()

        const data = {
          number,
          question,
          contactWay,
          contact,
          userCity,
          userCountry,
          googleClientId,
          userDevice,
          utmSource,
          utmMedium,
          utmCampaign,
          utmContent,
          utmTerm,
          double
        }

        if (
          data.contact !== '' &&
          data.contact !== null &&
          !data.contact.includes('@')
        ) {
          data.number = data.contact
          data.contact = '-'
        }

        sumbitData(data)

        setTimeout(() => {
          moduleStepSuccess.classList.add('hidden')
          btnAskQuestion.classList.remove('hidden')

          moduleStepSuccess.classList.remove('showed')

          // console.log(sectionAskQuestionsInner.innerHTM);
          oneMoreQuestionText.innerText = 'ещё один'
          const sectionAskQuestionInnerSaver =
            sectionAskQuestionsInner.innerHTML
          // console.log(sectionAskQuestionInnerSaver);
          sectionAskQuestionsInner.innerHTML = 'Спасибо! Мы с вами свяжемся!'
          setTimeout(() => {
            sectionAskQuestionsInner.innerHTML = sectionAskQuestionInnerSaver
          }, 3000)

          moduleQuestions.classList.add('hidden')
          document.body.classList.remove('dark-overlay')
          // document.body.removeEventListener("click", closeQuestionModule);
          moduleBtnSubmit.removeEventListener('click', submitQuestionModule)
        }, 3000)
      } else {
        moduleInputContactInfo.classList.add('bg-danger')

        if (moduleInputContactInfo.type === 'email') {
          // todo: validate email
        } else {
          moduleInputContactInfo.addEventListener('keyup', e => {
            // console.log("event keyup");
            if (
              moduleInputContactInfo.value.trim() !== '' &&
              moduleInputContactInfo.value.trim().match(numValidation)
            ) {
              // console.log("correct");
              moduleInputContactInfo.classList.remove('bg-danger')
            } else {
              // console.log("wrong");
              moduleInputContactInfo.classList.add('bg-danger')
            }

            e.preventDefault()
          })
        }
      }
    }

    e.preventDefault()
  })

  e.preventDefault()
})

// Carousel
const carouselItems = [
  carouselImgGroupOne,
  carouselImgGroupTwo,
  carouselImgGroupThree
]

// Terrible solution for carousel, it works tho
let i = 0
carouselBtnRight.addEventListener('click', e => {
  i > 2 ? (i = 0) : i
  i < 0 ? (i = 2) : i

  carouselItems[i].classList.add('hidden')
  carouselItems[i + 1 > 2 ? 0 : i + 1].classList.remove('hidden')
  carouselItems[i - 1 < 0 ? 2 : i - 1].classList.add('hidden')

  i++

  e.preventDefault()
})

// Don't look below
carouselBtnLeft.addEventListener('click', e => {
  i < 0 ? (i = 2) : i
  i > 2 ? (i = 0) : i
  carouselItems[i].classList.add('hidden')
  carouselItems[i + 1 > 2 ? 0 : i + 1].classList.add('hidden')
  carouselItems[i - 1 < 0 ? 2 : i - 1].classList.remove('hidden')
  i--

  e.preventDefault()
})

// On submit
ctaSubmitBtn.addEventListener('click', e => {
  const field = inputSelectChooseProgrammInnerText.innerText.trim()
  const uni = inputSelectChooseUniInnerText.innerText.trim()
  const number = phoneInputInnerText.value.trim()
  const userName = userInputNameText.value.trim()

  const googleClientId = ga.getAll()[0].get('clientId')

  let double = checkForUniqueUserNum()

  const data = {
    field,
    uni,
    number,
    userName,
    userCity,
    userCountry,
    googleClientId,
    userDevice,
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmTerm,
    double
  }

  // console.log(data);
  // console.log(JSON.stringify(data));

  // Validate input number
  if (number !== '' && number.match(numValidation)) {
    const appIsSumbitted = document.getElementById('js-app-is-submitted')

    appIsSumbitted.classList.add('showed')

    document
      .getElementById('step-success-row__back-to-main')
      .addEventListener('click', e => {
        appIsSumbitted.classList.add('removing')
        setTimeout(() => {
          appIsSumbitted.classList.remove('showed')
          appIsSumbitted.classList.remove('removing')
        }, 300)

        e.preventDefault()
      })

    // console.log("correct");
    sumbitData(data)
  } else {
    phoneInputInnerText.classList.add('bg-danger')
    // console.log("wrong");
    phoneInputInnerText.addEventListener('keyup', e => {
      // console.log("event keyup");
      if (
        phoneInputInnerText.value.trim() !== '' &&
        phoneInputInnerText.value.trim().match(numValidation)
      ) {
        // console.log("correct");
        phoneInputInnerText.classList.remove('bg-danger')
      } else {
        // console.log("wrong");
        phoneInputInnerText.classList.add('bg-danger')
      }

      e.preventDefault()
    })
  }

  e.preventDefault()
})

phoneInputInnerText.addEventListener('keydown', e => {
  const number = phoneInputInnerText.value.trim()
  // Validate input number
  if (number !== '' && number.match(numValidation)) {
    userNameInput.classList.add('showed')
  }
})

phoneInputInnerText.addEventListener('click', e => {
  const containerInputPhoneNum = document.getElementById(
    'container-input-phone-num'
  )
  if (document.body.clientWidth < 768) {
    containerInputPhoneNum.scrollIntoView({
      behavior: 'smooth'
    })
  }
})

// Learn more btn
const learnMoreBtn = document.getElementById('learn-more-btn')
learnMoreBtn.addEventListener('click', e => {
  showPopUpContant()

  submitPopUpForm()

  closePopUpContant()

  e.preventDefault()
})

function showPopUpContant() {
  const moduleForm = document.getElementById('module-popup-form')
  moduleForm.classList.add('show')
}

function closePopUpContant() {
  const moduleForm = document.getElementById('module-popup-form')
  const popUpForm = document.getElementById('pop-up-form')
  const learnMoreBtn = document.getElementById('learn-more-btn')
  document.body.addEventListener('click', function closePopUpContactEvent(e) {
    if (
      moduleForm.classList.contains('show') &&
      e.target !== popUpForm &&
      !popUpForm.contains(e.target) &&
      e.target !== learnMoreBtn &&
      !learnMoreBtn.contains(e.target)
    ) {
      moduleForm.classList.remove('show')
      document.body.removeEventListener('click', closePopUpContactEvent)
    }
  })
}

function showMorePartnersDesktop() {
  const partnersSecondRow = document.querySelector(
    '.section-trust-boost .content__img-group:nth-child(2)'
  )
  if (document.body.clientWidth > 768) {
    partnersSecondRow.classList.remove('hidden')
  } else {
    partnersSecondRow.classList.add('hidden')
  }
  window.addEventListener('resize', () => {
    if (document.body.clientWidth > 768) {
      partnersSecondRow.classList.remove('hidden')
    } else {
      partnersSecondRow.classList.add('hidden')
    }
  })
}

showMorePartnersDesktop()

// Submit Data from Forms
function submitPopUpForm() {
  // console.log('test')
  const popUpFormSubmit = document.getElementById('pop-up-form-submit')
  const moduleForm = document.getElementById('module-popup-form')
  popUpFormSubmit.addEventListener('click', e => {
    e.preventDefault()

    // Submit
    const userName = document.getElementById('pop-up-form-name').value.trim()
    const userNameEl = document.getElementById('pop-up-form-name')
    const number = document.getElementById('pop-up-form-number').value.trim()
    const numberEl = document.getElementById('pop-up-form-number')

    const googleClientId = ga.getAll()[0].get('clientId')

    let double = checkForUniqueUserNum()

    const data = {
      number,
      userName,
      userCity,
      userCountry,
      googleClientId,
      userDevice,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      double
    }

    if (
      number !== '' &&
      number !== null &&
      number !== undefined &&
      number.match(numValidation)
    ) {
      const appIsSumbitted = document.getElementById(
        'js-app-is-submitted--learn-more'
      )

      appIsSumbitted.classList.add('showed')

      document
        .getElementById('step-success-row__back-to-main--form-popup')
        .addEventListener('click', e => {
          appIsSumbitted.classList.add('removing')
          setTimeout(() => {
            appIsSumbitted.classList.remove('showed')
            appIsSumbitted.classList.remove('removing')
          }, 300)

          e.preventDefault()
        })

      const success = document.getElementById('module-popup-is-submitted')
      success.classList.remove('hidden')
      sumbitData(data)
      moduleForm.classList.remove('show')
      userNameEl.value = ''
      numberEl.value = ''
    } else {
      numberEl.classList.add('bg-danger')
      numberEl.focus()
      numberEl.addEventListener('keyup', e => {
        e.target.value !== ''
          ? numberEl.classList.remove('bg-danger')
          : numberEl.classList.add('bg-danger')
      })
    }
  })
}

function submitContactForm() {
  const popUpFormSubmit = document.getElementById('submit-btn-contact-form')
  popUpFormSubmit.addEventListener('click', e => {
    e.preventDefault()

    // Submit
    const userName = document
      .getElementById('user-name-contact-from')
      .value.trim()
    const userNameEl = document.getElementById('user-name-contact-from')
    const number = document.getElementById('number-contact-form').value.trim()
    const numberEl = document.getElementById('number-contact-form')

    const googleClientId = ga.getAll()[0].get('clientId')

    let double = checkForUniqueUserNum()

    const data = {
      number,
      userName,
      userCity,
      userCountry,
      googleClientId,
      userDevice,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      double
    }

    if (
      number !== '' &&
      number !== null &&
      number !== undefined &&
      number.match(numValidation)
    ) {
      const success = document.getElementById('footer-form-is-submitted')
      success.classList.remove('hidden')
      sumbitData(data)
      numberEl.value = ''
      userNameEl.value = ''
    } else {
      numberEl.classList.add('bg-danger')
      numberEl.focus()
      numberEl.addEventListener('keyup', e => {
        e.target.value !== ''
          ? numberEl.classList.remove('bg-danger')
          : numberEl.classList.add('bg-danger')
      })
    }
  })
}

submitContactForm()
