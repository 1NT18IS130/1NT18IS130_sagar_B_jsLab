const input_regex = {
  username: /^[a-z\d]{5,20}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[#\w@_-]{8,20}$/
}

const validation = (field, re) => {
  if(re.test(field.value)) {
    field.className = 'valid'
  } else {
    field.className = 'invalid'
  }
}

let inputs = document.querySelectorAll('input');

inputs.forEach(item => item.addEventListener('keyup', e => {
    validation(e.target, input_regex[e.target.attributes.name.value])
  })
);