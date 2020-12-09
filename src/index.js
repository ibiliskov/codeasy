'use strict'

const boxen = require('boxen')
const chalk = require('chalk')
const clear = require('clear')
const brandColor = '#24AA86'

clear()

const data = {
  name: chalk.bold.hex(brandColor)('         Codeasy'),
  copy: chalk.hex(brandColor)('         We make things easier'),
  work: `${chalk.white(
    'Web development agency with focus on machine learning'
  )}`,
  web: chalk.cyan('https://codeasy.com'),
  linkedin:
    chalk.gray('https://linkedin.com/company/') + chalk.cyan('codeasycom'),
  instagram: chalk.gray('https://instagram.com/') + chalk.cyan('codeasycom'),
  facebook: chalk.gray('https://facebook.com/') + chalk.cyan('codeasycom'),
  email: chalk.gray('info') + chalk.cyan('@codeasy.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('codeasy'),

  labelWork: chalk.white.bold('       Work:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelInstagram: chalk.white.bold('  Instagram:'),
  labelFacebook: chalk.white.bold('   Facebook:'),
  labelEmail: chalk.white.bold('      Email:'),
  labelCard: chalk.white.bold('       Card:'),
}

// Build the card
const me = boxen(
  [
    `${data.name}`,
    `${data.copy}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelWeb}  ${data.web}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelInstagram}  ${data.instagram}`,
    `${data.labelFacebook}  ${data.facebook}`,
    `${data.labelEmail}  ${data.email}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      'Company based from Split, Croatia, with over 10 years of experience. '
    )}`,
    `${chalk.italic(
      'Offering end to end web app dev, consulting or implementation.'
    )}`,
    `${chalk.italic('Doing machine learning and computer vision.')}`,
    ``,
    `${chalk.bold("We're hiring!!! Get in touch with us.")}`,
  ].join('\n'),
  {
    margin: 1,
    padding: 1,
    float: 'center',
    borderStyle: 'single',
    borderColor: brandColor,
  }
)

console.log(me)

const tip = [
  `Tip: Try ${chalk.cyan.bold('cmd/ctrl + click')} on the links above`,
  '',
].join('\n')

console.log(tip)
