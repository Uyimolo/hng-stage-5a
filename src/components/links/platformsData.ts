import PlatformCreationCard from './PlatformCreationCard';
import github from '../../assets/svg/socials/teenyicons_github-solid.svg';
import inactiveGithub from '../../assets/svg/inactive/teenyicons_github-solid.svg';
import frontendMentor from '../../assets/svg/socials/freecodecamp.svg';
import inactiveFrontendMentor from '../../assets/svg/inactive/freecodecamp.svg';
import twitter from '../../assets/svg/socials/mdi_twitter.svg';
import inactiveTwitter from '../../assets/svg/inactive/mdi_twitter.svg';
import linkedIn from '../../assets/svg/socials/mdi_linkedin.svg';
import inactiveLinkedIn from '../../assets/svg/inactive/mdi_linkedin.svg';
import youtube from '../../assets/svg/socials/ri_youtube-fill.svg';
import inactiveYoutube from '../../assets/svg/inactive/ri_youtube-fill.svg';
import facebook from '../../assets/svg/socials/bi_facebook.svg';
import inactiveFacebook from '../../assets/svg/inactive/bi_facebook.svg';
import twitch from '../../assets/svg/socials/mdi_twitch.svg';
import inactiveTwitch from '../../assets/svg/inactive/mdi_twitch.svg';
import devTo from '../../assets/svg/socials/skill-icons_devto-dark.svg';
import inactiveDevto from '../../assets/svg/inactive/skill-icons_devto-dark.svg';
import codewars from '../../assets/svg/socials/cib_codewars.svg';
import inactiveCodewars from '../../assets/svg/inactive/cib_codewars.svg';
import codepen from '../../assets/svg/socials/ri_codepen-line.svg';
import inactiveCodepen from '../../assets/svg/inactive/ri_codepen-line.svg';
import hashnode from '../../assets/svg/socials/fa6-brands_hashnode.svg';
import inactivehashnode from '../../assets/svg/inactive/fa6-brands_hashnode.svg';
import gitlab from '../../assets/svg/socials/ri_gitlab-fill.svg';
import inactiveGitlab from '../../assets/svg/inactive/ri_gitlab-fill.svg';
import stackoverflow from '../../assets/svg/socials/cib_stackoverflow.svg';
import inactiveStackoverflow from '../../assets/svg/inactive/cib_stackoverflow.svg';
import freecodecamp from '../../assets/svg/socials/realFreecodecamp.svg';
import inactiveFreecodecamp from '../../assets/svg/inactive/ri_codepen-line.svg';

export const socialMediaPlatforms = [
  {
    platform: 'Github',
    placeholder: 'https://github.com/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveGithub,
    icon: github,
  },
  {
    platform: 'Frontend Mentor',
    placeholder: 'https://www.frontendmentor.io/profiles/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveFrontendMentor,
    icon: frontendMentor,
  },
  {
    platform: 'Twitter',
    placeholder: 'https://twitter.com/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveTwitter,
    icon: twitter,
  },
  {
    platform: 'LinkedIn',
    placeholder: 'https://www.linkedin.com/in/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveLinkedIn,
    icon: linkedIn,
  },
  {
    platform: 'YouTube',
    placeholder: 'https://www.youtube.com/channel/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveYoutube,
    icon: youtube,
  },
  {
    platform: 'Facebook',
    placeholder: 'https://www.facebook.com/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveFacebook,
    icon: facebook,
  },
  {
    platform: 'Twitch',
    placeholder: 'https://www.twitch.tv/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveTwitch,
    icon: twitch,
  },
  {
    platform: 'Dev.to',
    placeholder: 'https://dev.to/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveDevto,
    icon: devTo,
  },
  {
    platform: 'Codewars',
    placeholder: 'https://www.codewars.com/users/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveCodewars,
    icon: codewars,
  },
  {
    platform: 'Codepen',
    placeholder: 'https://codepen.io/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveCodepen,
    icon: codepen,
  },
  {
    platform: 'FreeCodeCamp',
    placeholder: 'https://www.freecodecamp.org/forum/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveFreecodecamp,
    icon: freecodecamp,
  },
  {
    platform: 'GitLab',
    placeholder: 'https://gitlab.com/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveGitlab,
    icon: gitlab,
  },
  {
    platform: 'Hashnode',
    placeholder: 'https://hashnode.com/@johnappleseed',
    isActive: false,
    inactiveIcon: inactivehashnode,
    icon: hashnode,
  },
  {
    platform: 'Stack Overflow',
    placeholder: 'https://stackoverflow.com/users/johnappleseed',
    isActive: false,
    inactiveIcon: inactiveStackoverflow,
    icon: stackoverflow,
  },
];

console.log(socialMediaPlatforms);
