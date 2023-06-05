---
layout: page
---
<script setup>
    import {
        VPTeamPage,
        VPTeamPageTitle,
        VPTeamMembers
    } from 'vitepress/theme'

    const members = [
    {
        avatar: 'https://www.github.com/yyx990803.png',
        name: 'Muhammad Istiqlal',
        title: 'Lead Development & Curriculum',
        links: [
        { icon: 'github', link: 'https://github.com/yyx990803' },
        { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
        ]
    },
    ]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            Our Contributor
        </template>
        <template #lead>
            Pengembangan dari Website Belajar Lists dibuat oleh beberapa orang yang sesuai dengan bidangnya
        </template>
    </VPTeamPageTitle>
    <VPTeamMembers
    :members="members"
    />
    <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>