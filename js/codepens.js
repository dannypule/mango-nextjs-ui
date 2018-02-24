export default getCodepens()

function getCodepens() {
  const pens = [
    {
      title: `Magical Elixir`,
      subTitle: `CSS`,
      code: `vywaZw`
    },
    {
      title: `Old Master`,
      subTitle: `CSS`,
      code: `RWbYMq`
    },
    {
      title: `Virtual Vault`,
      subTitle: `React, CSS`,
      code: `zKYbmP`
    },
    {
      title: `Micro Control Unit`,
      subTitle: `CSS`,
      code: `Kgqbgp`
    },
    {
      title: `Menu animation`,
      subTitle: `CSS`,
      code: `pEjEOR`
    }
  ]

  return formatPens(pens)
}

function formatPens(pens) {
  const formattedPens: any[] = []
  pens.forEach(pen => {
    formattedPens.push({
      title: pen.title,
      subTitle: pen.subTitle,
      code: pen.code,
      url: `//codepen.io/danny_pule/embed/${
        pen.code
      }/?height=800&theme-id=14066&default-tab=result&embed-version=2`
    })
  })
  return formattedPens
}
