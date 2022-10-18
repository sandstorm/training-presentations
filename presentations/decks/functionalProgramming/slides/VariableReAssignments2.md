# Variable Reassignment

```tsx {all|3|6|13|16-27|18-20|26} {maxHeight: '100'}
// Mutable way
const getRoleLogoPath = (role) => {
    let logo

    if (role === 'admin') {
      logo = '../somePath/adminLogo.png'
    } else if (role === 'mod') {
      logo = '../somePath/modLogo.png'
    } else {
      logo = '../somePath/userLogo.png'
    }

    return logo
}

// Immutable way
const getRoleLogoPathImmutably = (role) => {
    if (role === 'admin') {
      return '../somePath/adminLogo.png'
    }

    if (role === 'mod') {
      return '../somePath/modLogo.png'
    }

    return '../somePath/userLogo.png'
}
```
