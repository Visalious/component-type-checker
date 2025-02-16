/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider, Header } from '@componlyco/berkoukes'
import { Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp'
import CloseIcon from "../../assets/icons/CloseIcon"

// const useStyles = makeStyles((theme: any) => ({
//   container: {
//     background:
//       'radial-gradient(137.05% 100% at 50% 0%, #DEFFEF 5.21%, #EAF4FF 44.79%, #FFFFFF 100%)',
//   },
//   lottieContainer: {
//     background:
//       'linear-gradient(180deg, rgba(240, 247, 255, 0) 0%, #F0F7FF 100%)',
//     position: 'relative',
//   },
//   lottieShade: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     zIndex: 2000,
//     backgroundImage: 'linear-gradient(to bottom, #F0F7FF00, #f0f7ff)',
//   },
//   playIconContainer: {
//     background: 'white',
//     padding: 12,
//     position: 'absolute',
//     transform: '-translateX(50%), -translateY(50%)',
//     [theme.breakpoints.down('md')]: {
//       left: '44%',
//     },
//     left: '48%',
//     zIndex: 2001,
//     top: '50%',
//     width: '60px',
//     height: '60px',
//     cursor: 'pointer',
//     borderRadius: 10000,
//     display: 'flex',
//     alignItems: 'center',
//   },
//   externelLink: {
//     '&:hover path': {
//       stroke: '#000000',
//     },
//   },
// }))

export default function Navbar() {
  const theme:any = useTheme()
  // const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const md_down = useMediaQuery(theme.breakpoints.down('md'))

  const links = [
    {
      label: 'Documentation',
      href: 'docs'
    },
    {
      label: 'Adoption reports example',
      href: 'http://reports.componly.co'
    },
    {
      label: 'Tutorials',
      href: 'https://www.youtube.com/@componly'
    },
    {
      label: 'Free vs Paid version',
      href: '#pricing'
    }
  ]

  return (
    <>
      <Stack
        paddingX="24px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #D0D5DD"
        position="relative"
        zIndex="2"
        style={{ background: 'white' }}
      >
        <Stack direction="row" alignItems="center">
          <Header
            tabs={[]}
            endButtons={[]}
            sx={{ borderBottom: 'none', background: 'transparent' }}
          /> 

          <Stack
            direction="row"
            gap="32px"
            marginLeft="16px"
            display={md_down && 'none'}
          >
            {links.map(link => (
              <Link
                href={link.href}
                key={link.label}
                target={link.href === '#pricing' ? '_self' : '_blank'}
                sx={{ textDecoration: 'none' }}
                display="flex"
                gap="8px"
                alignItems="center"
                // className={classes.externelLink}
              >
                <Typography
                  color="#616161"
                  fontWeight="700"
                  fontSize="16px"
                  sx={{
                    '&:hover': {
                      color: '#000000',
                    },
                  }}
                >
                  {link.label}
                </Typography>

                {link.label === 'Adoption reports example' && (
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.73633 2.5H5.98633C4.43303 2.5 3.17383 3.75919 3.17383 5.31248V14.6875C3.17383 16.2408 4.43303 17.5 5.98633 17.5H15.3613C16.9146 17.5 18.1738 16.2408 18.1738 14.6875V10.9375M13.4859 2.50023L18.1738 2.5M18.1738 2.5V6.71884M18.1738 2.5L10.2044 10.4685"
                      stroke="#475467"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </Stack>
        </Stack>

        <Stack
          direction="row"
          gap="16px"
          alignItems="center"
          position="relative"
        >
          <Divider
            orientation="vertical"
            sx={{
              height: '30px',
              marginTop: '5px',
              display: !md_down ? 'block' : 'none',
            }}
          />

          <a href={'#'} target='_blank'>
            <Button type="borders" label="Client Portal" />
          </a>

          <Link href="/key" sx={{ textDecoration: 'none' }}>
            <Button
              label="Start Free & Get CLI Key"
              type="primary"
              sx={{
                display: !md_down ? 'block' : 'none',
              }}
            />
          </Link>

          {open ? (
            <Button
              type="borders"
              icon={<CloseIcon />}
              sx={{
                display: md_down ? 'flex' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => setOpen(false)}
            />
          ) : (
            <Button
              type="borders"
              icon={<ReorderSharpIcon />}
              sx={{
                display: md_down ? 'flex' : 'none',
              }}
              onClick={() => setOpen(true)}
            />
          )}
        </Stack>
      </Stack>
      <Stack
        gap="16px"
        marginLeft="16px"
        sx={{
          maxHeight: open ? 245 : 0,
          overflow: 'hidden',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '500ms',
        }}
        textAlign="center"
      >
        {links.map(link => (
          <Typography
            color={theme.palette.text.darkgray}
            fontWeight="700"
            fontSize="16px"
          >
            {link.label}
          </Typography>
        ))}

        <Stack direction="row" justifyContent="center" gap="16px">
          {/* <Link href="/login" sx={{ textDecoration: 'none' }}>
            <Button label="Login" type="borders" />
          </Link> */}

          <Link href="/register" sx={{ textDecoration: 'none' }}>
            <Button label="Start Free & Get CLI Key" type="primary" />
          </Link>
        </Stack>
      </Stack>
    </>
  )
}
