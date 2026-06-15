"use client";

import Image from "next/image";
import { Download, Language, MailOutline } from "@mui/icons-material";
import { Box, Button, Container, Divider, Grid, Stack, Typography } from "@mui/material";

import { type Locale, type Messages, localeLabels, locales } from "@/app/i18n/translations";

export function Footer({
  locale,
  setLocale,
  t,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
}) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0D2A1E",
        color: "white",
        pt: { xs: 8, md: 10 },
        pb: { xs: 5, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 6 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={1.5} alignItems="center" mb={2.5}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  bgcolor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image src="/assets/gaia-nexus-logo.png" alt="GaiaNexus logo" width={36} height={36} style={{ objectFit: "contain" }} />
              </Box>
              <Box>
                <Typography fontWeight={800} sx={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  Gaia Nexus
                </Typography>
                <Typography sx={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.45)" }}>
                  Private Limited
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{
                color: "#6ECFA0",
                fontWeight: 600,
                fontSize: "0.9rem",
                mb: 2,
                fontStyle: "italic",
              }}
            >
              {t.footer.tagline}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.50)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 320 }}>
              {t.footer.description}
            </Typography>
          </Grid>

          {/* Navigation */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              fontWeight={700}
              sx={{ mb: 2.5, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}
            >
              {t.footer.nav_title}
            </Typography>
            <Stack spacing={1.5}>
              {[
                { label: t.footer.links[0], href: "/#story" },
                { label: t.footer.links[1], href: "/#technology" },
                { label: t.footer.links[2], href: "/#benefits" },
                { label: t.footer.links[3], href: "/#contact" },
                { label: t.nav.blog, href: "/blog" },
                { label: t.nav.testimonials, href: "/testimonials" },
              ].map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: "rgba(255,255,255,0.60)",
                    justifyContent: "flex-start",
                    p: 0,
                    minWidth: 0,
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    "&:hover": { color: "#6ECFA0", bgcolor: "transparent" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              fontWeight={700}
              sx={{ mb: 2.5, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}
            >
              {t.footer.contact_title}
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <MailOutline sx={{ fontSize: 16, color: "#6ECFA0" }} />
                <Typography sx={{ color: "rgba(255,255,255,0.60)", fontSize: "0.85rem" }}>
                  {t.contact.info.email}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Language sx={{ fontSize: 16, color: "#6ECFA0" }} />
                <Typography sx={{ color: "rgba(255,255,255,0.60)", fontSize: "0.85rem" }}>
                  {t.contact.info.website}
                </Typography>
              </Stack>
              <Typography sx={{ color: "rgba(255,255,255,0.40)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                {t.footer.collaboration}
              </Typography>
            </Stack>
          </Grid>

          {/* CTA panel */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                p: 3,
                borderRadius: "16px",
                bgcolor: "rgba(30,91,67,0.35)",
                border: "1px solid rgba(110,207,160,0.15)",
              }}
            >
              <Typography fontWeight={700} sx={{ mb: 1, fontSize: "0.95rem" }}>
                Ready to transform your farm?
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", mb: 2.5, lineHeight: 1.6 }}>
                Request our product brochure and speak with our team.
              </Typography>
              <Button
                href="/assets/gaianexus-brochure.pdf"
                download
                variant="outlined"
                size="small"
                fullWidth
                startIcon={<Download sx={{ fontSize: 16 }} />}
                sx={{
                  color: "#6ECFA0",
                  borderColor: "rgba(110,207,160,0.35)",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "rgba(110,207,160,0.10)", borderColor: "#6ECFA0" },
                }}
              >
                {t.contact.brochureLabel}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 4 }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} {t.footer.copyright}
          </Typography>
          <Stack direction="row" spacing={0.5}>
            {locales.map((loc) => (
              <Button
                key={loc}
                size="small"
                onClick={() => setLocale(loc)}
                sx={{
                  color: locale === loc ? "#6ECFA0" : "rgba(255,255,255,0.35)",
                  fontWeight: locale === loc ? 700 : 400,
                  minWidth: 0,
                  px: 1,
                  fontSize: "0.78rem",
                  "&:hover": { color: "#6ECFA0", bgcolor: "transparent" },
                }}
              >
                {localeLabels[loc]}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
