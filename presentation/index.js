// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  GoToAction,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");
require('prismjs/components/prism-bash');
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-ini');
require('prismjs/themes/prism-tomorrow.css');

const images = {
  kubernetes: require('../assets/kubernetes.png'),
  aws_architecture: require('../assets/aws-architecture.png'),
  certified_kubernetes: require('../assets/certified_kubernetes.png'),
  amazon_eks: require('../assets/amazon-eks.png'),
  azure_aks: require('../assets/azure-aks.png'),
  google_gke: require('../assets/google-gke.png'),
  kube_system: require('../assets/kube-system.png')
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff",
  secondary: "white",
  tertiary: "#96CBD0",
  quaternary: "#b50000"
  },
  {
  primary: {
      name: 'Montserrat',
      googleFont: true,
      styles: ['400', '700']
  },
  secondary: "Helvetica",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="quaternary">
            Deploying Kubernetes
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            Kubeadm | Managed: EKS, AKS...
          </Text>
          <Layout>
            <Fill>
              <Image src={images.kubernetes.replace("/", "")} margin="1.5em auto auto" height="120px"/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Text margin="40px auto auto" size={1} textColor="primary">1. Kubernetes in a nutshell</Text>
          <Text margin="40px auto auto" size={1} textColor="secondary">2. Kube-aws, Kubespray...</Text>
          <Text margin="40px auto auto" size={1} textColor="secondary">3. Kubeadm</Text>
          <Text margin="40px auto auto" size={1} textColor="secondary">3.1 Kubeadm | Demo</Text>
          <Text margin="40px auto auto" size={1} textColor="secondary">4. Managed solutions: GKE, EKS, AKS</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
        <Heading size={1} fit lineHeight={1} textColor="black">
            Kubernetes | Overview
        </Heading>
        <Layout>
            <Fill>
              <Image src={images.kube_system.replace("/", "")} margin="1.5em auto auto" height="600px"/>
            </Fill>
        </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
        <Heading size={3} fit lineHeight={1} textColor="black">
            How we deploy | Architecture
        </Heading>
        <Layout>
            <Fill>
              <Image src={images.aws_architecture.replace("/", "")} margin="1.5em auto auto" height="600px"/>
            </Fill>
        </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
        <Heading size={4} fit lineHeight={1} textColor="quaternary">
            Kubespray
        </Heading>
        <List textColor="tertiary">
            <ListItem margin={12} textSize="1.1em">Deploys on cloud, bare-metal</ListItem>
            <ListItem margin={12} textSize="1.1em">Cloud-agnostic</ListItem>
            <ListItem margin={12} textSize="1.1em">Uses ansible</ListItem>
            <ListItem margin={12} textSize="1.1em">Heavy deployment</ListItem>
            <ListItem margin={12} textSize="1.1em">Kubernetes v1.12.X</ListItem>

        </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
        <Heading size={4} fit lineHeight={1} textColor="quaternary">
            Kube-aws
        </Heading>
        <List textColor="tertiary">
            <ListItem margin={12} textSize="1.1em">Only supports... AWS</ListItem>
            <ListItem margin={12} textSize="1.1em">Automatic horizontal scaling</ListItem>
            <ListItem margin={12} textSize="1.1em">Deploys as a CloudFormation stack</ListItem>
            <ListItem margin={12} textSize="1.1em">Kubernetes v1.11.X</ListItem>
        </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
        <Heading size={6} fit lineHeight={1} textColor="black">
            Kubeadm | Overview
        </Heading>
        <Layout>
            <Fill>
              <Image src={images.certified_kubernetes.replace("/", "")} margin="1.5em auto auto" height="120px"/>
            </Fill>
        </Layout>
        <List textColor="tertiary">
            <ListItem margin={16} textSize="1.1em">kubeadm init: bootstrap K8S control plane</ListItem>
            <ListItem margin={16} textSize="1.1em">kubeadm join: bootstrap a K8S node and join it to the cluster</ListItem>
            <ListItem margin={16} textSize="1.1em">kubeadm upgrade: upgrade to a newer version</ListItem>
        </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
        <Heading size={1} fit lineHeight={1} textColor="black">
            Kubeadm | alpha phase
        </Heading>
        <List textColor="tertiary">
            <ListItem margin={12} textSize="1.1em">kubeadm alpha phase certs</ListItem>
            <ListItem margin={12} textSize="1.1em">kubeadm alpha phase kubeconfig</ListItem>
            <ListItem margin={12} textSize="1.1em">kubeadm alpha phase kubelet</ListItem>
            <ListItem margin={12} textSize="1.1em">kubeadm alpha phase controlplane</ListItem>
            <ListItem margin={12} textSize="1.1em">kubeadm alpha phase etcd</ListItem>
            <ListItem margin={12} textSize="1.1em">kubeadm alpha phase addon (kube-proxy | coredns)</ListItem>
            <ListItem margin={12} textSize="1.1em">kubeadm alpha phase mark-master</ListItem>
        </List>
        </Slide>

        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="yaml"
            code={require("raw-loader!../assets/kubeadm-config.yaml")}
            ranges={[
              { loc: [0, 0], title: "Kubeadm Init config" },
              { loc: [0, 10], note: "init config" },
              { loc: [16, 18], note: "ClusterConfiguration | etcd config" },
              { loc: [33, 36], note: "ClusterConfiguration | network" },
            ]}/>

        <CodeSlide
            transition={[]}
            bgColor="#2D2D2D"
            color="#CCCCCC"
            lang="yaml"
            code={require("raw-loader!../assets/kubeadm-join.yaml")}
            ranges={[
              { loc: [0, 0], title: "Kubeadm Join config" },
              { loc: [8, 11], note: "Kubenrtes API" },
              { loc: [14, 16], note: "How to join" },
            ]}/>

          <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} fit caps lineHeight={1} textColor="quaternary">
            Demo time
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            https://github.com/chihebeddine/kdev
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
        <Heading size={4} fit lineHeight={1} textColor="quaternary">
            AWS EKS
        </Heading>
        <Layout>
            <Fill>
              <Image src={images.amazon_eks.replace("/", "")} margin="1.5em auto auto" height="180px"/>
            </Fill>
        </Layout>
        <List textColor="tertiary">
            <ListItem margin={12} textSize="1.1em">Managed Control Plane by AWS</ListItem>
            <ListItem margin={12} textSize="1.1em">GA | Limited regions</ListItem>
            <ListItem margin={12} textSize="1.1em">Amazon Linux / Ubuntu</ListItem>
            <ListItem margin={12} textSize="1.1em">Kubernetes v1.11.X</ListItem>
        </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
        <Heading size={4} fit lineHeight={1} textColor="quaternary">
            GOOGLE GKE
        </Heading>
        <Layout>
            <Fill>
              <Image src={images.google_gke.replace("/", "")} margin="1.5em auto auto" height="180px"/>
            </Fill>
        </Layout>
        <List textColor="tertiary">
            <ListItem margin={12} textSize="1.1em">Managed Control Plane by GKE</ListItem>
            <ListItem margin={12} textSize="1.1em">First managed Kubernetes</ListItem>
            <ListItem margin={12} textSize="1.1em">Supports CoreOS</ListItem>
            <ListItem margin={12} textSize="1.1em">Kubernetes v1.11.X</ListItem>
        </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
        <Heading size={4} fit lineHeight={1} textColor="quaternary">
            AZURE AKS
        </Heading>
        <Layout>
            <Fill>
              <Image src={images.azure_aks.replace("/", "")} margin="1.5em auto auto" height="180px"/>
            </Fill>
        </Layout>
        <List textColor="tertiary">
            <ListItem margin={12} textSize="1.1em">Managed Control Plane by Azure</ListItem>
            <ListItem margin={12} textSize="1.1em">GA | Limited regions</ListItem>
            <ListItem margin={12} textSize="1.1em">Kubernetes v1.11.X</ListItem>
        </List>
        </Slide>

      </Deck>
    );
  }
}