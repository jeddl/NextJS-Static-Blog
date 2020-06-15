---
title: Virtual Machine - Internal Network Connection
timestamp: 11/10/2019
tag: System
---

# Virtual Machine - Internal Network Connection

Here I am using [VirtualBox](https://www.virtualbox.org/) to setup my virtual machine as a server. Because I am now experimenting Docker and Kubernetes, Ubuntu is a good option for me. And of course you are able to select any Linux desktop distribution to be your virtual server.

## Install VirtualBox
This is a very easy step. Just [download](https://www.virtualbox.org/wiki/Downloads) any version of VirtualBox from Oracle VirtualBox official website which is corresponding to your OS. In my case, I am using macOS. And then install it on your laptop/desktop.

## Download .iso Image

Because I will be using Ubuntu in this tiny project, I just downloaded the latest Ubuntu version 19.10, whereas the LTS version is 18.04.

## Create A VM
After downloading  the VirtualBox and the .iso image, we can create a VM on the host machine.
1. Now that you have the tool, VirtualBox, and the installation, Ubuntu .iso file, you can create a VM on your OS.
2. Open VirtualBox, click New.
3. Give a name to your VM, and select a target folder. Select Linux as Type, and your distribution of Linux as Version. In my case, it is Ubuntu (64-bit)
4. Select memory for your VM. I used 2048MB since Ubuntu is not resource friendly. You can stick with 1024MB as default.
5. Create a virtual disk for your VM.
6. Select VDI as the hard disk type.
7. Now you will have to select which kind of disk you want to create, pick either one. (I used fixed size for my VM)
8. And you will select the directory where you want to keep the .vdi file, as well as the disk size you would like to assign to the VM.
9. Now the empty VM is created. You are able to see the one VM just created. Click it and click Start. A new window will pop out, and then you select the .iso image you just download from the dropdown and click Start.
10. Follow the instruction and install Ubuntu.

## Configure The Network For VM

You will find there is no Internet connection to your VM yet. That's because we have not setup a network used by VM.

There are several options for the VM network:
1. NAT
2. NAT Network
3. Bridged Adapter
4. Internal Network
5. Host-only Adapter
6. Generic Driver

This [article](https://www.nakivo.com/blog/virtualbox-network-setting-guide/) explains detailed information of each option and how to setup. In here, I will only go through NAT Network setup and how to SSH it from your host OS.

Now poweroff the VM. Select *Tools* and then *Preferences*.

In *Network*, you are able to see the following window but no items in the NAT Networks. Click *Add* button

![](/static/VmNetworkSetup/add_vm_network.png)

Give it a name, and then leave everything as default.

Go back to Ubuntu VM settings, under *Network*, when you enable *NAT Network*, you should be able to see the one you just created and select it.

![](/static/VmNetworkSetup/vm_network_config.png)

Now when you start your VM, you can access the Internet.

## Setup Port Forwarding Under NAT Network

Although you have the Internet connect in your VM, you are still not able to SSH from your host to the VM. You need to configure the Port Forwarding for your NAT Network in order to do this.

First you need to know the IP address of your VM. In VM terminal, type the command

```bash
$ ifconfig
```

to find out your IP

![](/static/VmNetworkSetup/ifconfig.png)

And then you need to setup your Linux server as the SSH server. Install OpenSSH in your terminal:

```bash
$ sudo apt install openssh-server
```

And check if it is running successfully
```bash
$ sudo systemctl status ssh
```

(__Optional__: Through `/etc/ssh/sshd_config`, uncomment PasswordAuthentication yes. This gives you the ability to SSH to VM using password, which is not recommended due to safety and convenience. Later I will explain how to use public-private key to SSH to VM.)

Go back to VirtualBox Tools *preferences*, under network, click *edit* button to edit the NatNetwork you just created. And click *Port Forwarding*. Fill out the blanks.

![](/static/VmNetworkSetup/port_forwarding.png)

Note that Host IP will be 127.0.0.1 since this is your local host. Here I use 8022 as my *Host Port* and 22 as *Guest Port*. You might find these ports used by other programs on your computer, and if that is the case, use another port. The *Guest IP* is the IP of your VM.

Reboot the VM. Now you should be able to SSH to your VM from your host using password.

```bash
$ ssh USERNAME@127.0.0.1 -p 8022
```

where USERNAME should be your account name on your VM.

## Using Pubic-Private Key

If you don't have your SSH key pair generated, do the following:

```bash
$ ssh-keygen -t rsa -b 4096
```

In your home directory, `$HOME`, there should be a `.ssh/` folder, and you should be able to find the file `id_rsa.pub`. This is your public key file. Open it with an editor and copy the content. Go back to your VM, and in its `ssh/` directory (Create one if not exists), create a file authorized_keys. Paste the public key into that file and save it.

Now you should be able to SSH to your VM without entering the password.

## Tricks

You can also edit your profile to add an alia to make your life easier. In my case, since I am using zsh, I added alias `ubuntu='ssh USERNAME@127.0.0.1 -p 8022'` to my .zshrc. So in the terminal:

```bash
$ source .zshrc
```

Now if I type "ubuntu" in the terminal, I am able to SSH to my VM already!

Enjoy!
