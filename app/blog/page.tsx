"use client";

import { CalendarToday } from "@mui/icons-material";
import { Box, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";

import { type Messages, getMessages } from "@/app/i18n/translations";
import { useLocale } from "@/app/hooks/useLocale";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { SectionEyebrow } from "@/app/components/SectionEyebrow";

export default function BlogPage() {
  const [locale, setLocale] = useLocale();
  const t: Messages = getMessages(locale);

  return (
    <Box className="min-h-screen" sx={{ bgcolor: "transparent" }}>
      <Navbar locale={locale} setLocale={setLocale} t={t} />

      <Box sx={{ py: { xs: 9, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: { xs: 6, md: 8 } }}>
            <SectionEyebrow>{t.blog.eyebrow}</SectionEyebrow>
            <Typography variant="h2" sx={{ mt: 1.5, mb: 2 }}>
              {t.blog.title}
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
              {t.blog.subtitle}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {t.blog.posts.map((post) => (
              <Grid key={post.title} size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    borderRadius: "20px",
                    border: "1px solid rgba(30,91,67,0.08)",
                    bgcolor: "white",
                    boxShadow: "0 12px 40px rgba(30,91,67,0.06)",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
                    <Chip
                      label={post.tag}
                      size="small"
                      sx={{
                        bgcolor: "rgba(30,91,67,0.08)",
                        color: "primary.main",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        borderRadius: "6px",
                        height: 24,
                      }}
                    />
                    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: "text.secondary" }}>
                      <CalendarToday sx={{ fontSize: 14 }} />
                      <Typography variant="caption" fontWeight={600}>
                        {post.date}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 1.5, letterSpacing: "-0.01em" }}>
                    {post.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {post.excerpt}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer locale={locale} setLocale={setLocale} t={t} />
    </Box>
  );
}
