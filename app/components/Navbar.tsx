"use client";

import Image from "next/image";
import { useState } from "react";
import { Close, Language, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import { type Locale, type Messages, localeLabels, locales } from "@/app/i18n/translations";

export function Navbar({
  locale,
  setLocale,
  t,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.story, href: "/#story" },
    { label: t.nav.technology, href: "/#technology" },
    { label: t.nav.benefits, href: "/#benefits" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.testimonials, href: "/testimonials" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(30,91,67,0.10)",
          bgcolor: "rgba(255,255,255,0.90)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: 2, justifyContent: "space-between" }}>
            {/* Logo */}
            <Stack direction="row" spacing={1.5} alignItems="center" component="a" href="/" sx={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  bgcolor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(30,91,67,0.20)",
                  overflow: "hidden",
                }}
              >
                <Image src="/assets/gaia-nexus-logo.png" alt="GaiaNexus logo" width={38} height={38} style={{ objectFit: "contain" }} />
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={800}
                  sx={{ lineHeight: 1.1, color: "primary.dark", letterSpacing: "-0.02em" }}
                >
                  Gaia Nexus
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.68rem" }}>
                  Private Limited
                </Typography>
              </Box>
            </Stack>

            {/* Desktop Nav */}
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    "&:hover": { color: "primary.main", bgcolor: "rgba(30,91,67,0.06)" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                href="/#contact"
                variant="contained"
                sx={{ ml: 1, px: 3, fontWeight: 700 }}
              >
                {t.nav.contact}
              </Button>
              <TextField
                select
                size="small"
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                sx={{
                  ml: 1.5,
                  minWidth: 130,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    bgcolor: "rgba(30,91,67,0.05)",
                    "& fieldset": { borderColor: "rgba(30,91,67,0.15)" },
                  },
                }}
                InputProps={{ startAdornment: <Language sx={{ mr: 1, fontSize: 18, color: "primary.main" }} /> }}
              >
                {locales.map((loc) => (
                  <MenuItem key={loc} value={loc}>{localeLabels[loc]}</MenuItem>
                ))}
              </TextField>
            </Stack>

            {/* Mobile menu button */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor={locale === "ar" ? "right" : "left"}
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{ sx: { width: 280, p: 3 } }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography fontWeight={800} color="primary.main">Gaia Nexus</Typography>
          <IconButton onClick={() => setMobileMenuOpen(false)}><Close /></IconButton>
        </Stack>
        <Stack spacing={1}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              fullWidth
              color="inherit"
              sx={{ justifyContent: "flex-start", fontWeight: 600 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Button>
          ))}
          <Button
            href="/#contact"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.contact}
          </Button>
          <Divider sx={{ my: 1 }} />
          <TextField
            select
            size="small"
            fullWidth
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            label="Language"
          >
            {locales.map((loc) => (
              <MenuItem key={loc} value={loc}>{localeLabels[loc]}</MenuItem>
            ))}
          </TextField>
        </Stack>
      </Drawer>
    </>
  );
}
