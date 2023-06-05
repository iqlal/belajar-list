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
        avatar: 'https://avatars.githubusercontent.com/u/64581779',
        name: 'Muhammad Istiqlal',
        title: 'Lead Development & Curriculum',
        links: [
        { icon: 'github', link: 'https://github.com/iqlal' },
        { icon: 'linkedin', link: 'https://linkedin.com/in/iqlal' }
        ]
    },
    {
        avatar: '/22051204080.jpg',
        name: 'M Avicena Hendrico',
        title: 'Content Writer',
        // links: [
        // { icon: 'github', link: 'https://github.com/yyx990803' },
        // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
        // ]
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