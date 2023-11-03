import Image from 'next/image'
import styles from '@/styles/home.module.css'

export default function AboutSection() {
  return (
    <section
      id='about'
      className='flex min-h-screen w-full snap-start flex-col items-start justify-center bg-idePurple px-20'
    >
      <h2
        className={`mb-12 w-4/5 self-center whitespace-nowrap bg-transparent text-5xl leading-none ${styles.dropShadow}`}
      >
        SOBRE NOS
      </h2>

      <div className='flex w-4/5 items-center gap-40 self-center'>
        {/* Text */}
        <div className='flex h-full w-1/2 flex-col gap-20 border-l-[12px] border-ideRed bg-about px-12 py-20 text-white'>
          <p className='max-h-[900px] overflow-hidden text-ellipsis text-sm'>
            A IDE é a empresa júnior dos cursos Ciência e Engenharia de
            Computação da Universidade Federal do Rio Grande do Sul. Formada por
            alunos interessados em se tornarem empreendedores e profissionais
            excepcionais, a IDE fornece soluções em software, como sites e
            sistemas, com preços abaixo do mercado, aliados à excelência da
            UFRGS, o Instituto de Informática e seus professores, que fornecem
            apoio técnico e aconselhamento aos estudantes.
          </p>

          <Image
            alt=''
            src='/img/logo-pixelado-branco.png'
            width={110}
            height={60}
            className='h-16 w-28 self-center'
          />
        </div>

        <Image
          alt=''
          className='max-h-[640px] w-fit'
          src='/img/neko-comemorando.png'
          width={928}
          height={875}
        />
      </div>
    </section>
  )
}
