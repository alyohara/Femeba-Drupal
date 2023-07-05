<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/contrib/zeropoint/templates/block/block--system-menu-block.html.twig */
class __TwigTemplate_80b3526f0cc1b17b20932b6832c51740 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 35
        $context["classes"] = [0 => "block", 1 => "block-menu", 2 => "navigation", 3 => ("menu--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 39
($context["derivative_plugin_id"] ?? null), 39, $this->source)))];
        // line 43
        $context["blk_title"] = [0 => "title", 1 => "block-title"];
        // line 48
        echo "<div class=\"block-wrapper clearfix\">
";
        // line 49
        $context["heading_id"] = ($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "id", [], "any", false, false, true, 49), 49, $this->source) . \Drupal\Component\Utility\Html::getId("-menu"));
        // line 51
        echo "<nav aria-label=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["heading_id"] ?? null), 51, $this->source), "html", null, true);
        echo "\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 51), 51, $this->source), "role", "aria-labelledby"), "html", null, true);
        echo ">
  ";
        // line 53
        echo "  ";
        if ( !twig_get_attribute($this->env, $this->source, ($context["configuration"] ?? null), "label_display", [], "any", false, false, true, 53)) {
            // line 54
            echo "    ";
            $context["title_attributes"] = twig_get_attribute($this->env, $this->source, ($context["title_attributes"] ?? null), "addClass", [0 => "visually-hidden"], "method", false, false, true, 54);
            // line 55
            echo "  ";
        }
        // line 56
        echo "  ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 56, $this->source), "html", null, true);
        echo "
  ";
        // line 57
        if ((($context["label"] ?? null) && (($context["themed_block"] ?? null) || ($context["block_icon"] ?? null)))) {
            // line 58
            echo "  <div class=\"block-icon\"></div>
  ";
        }
        // line 60
        echo "  ";
        if (($context["block_seo"] ?? null)) {
            // line 61
            echo "  ";
            if (($context["label"] ?? null)) {
                // line 62
                echo "  <h3";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["title_attributes"] ?? null), "setAttribute", [0 => "id", 1 => ($context["heading_id"] ?? null)], "method", false, false, true, 62), "addClass", [0 => ($context["blk_title"] ?? null)], "method", false, false, true, 62), 62, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["configuration"] ?? null), "label", [], "any", false, false, true, 62), 62, $this->source), "html", null, true);
                echo "</h3>
  ";
            }
            // line 64
            echo "  ";
        } else {
            // line 65
            echo "  ";
            if (($context["label"] ?? null)) {
                // line 66
                echo "  <div";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["title_attributes"] ?? null), "setAttribute", [0 => "id", 1 => ($context["heading_id"] ?? null)], "method", false, false, true, 66), "addClass", [0 => ($context["blk_title"] ?? null)], "method", false, false, true, 66), 66, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["configuration"] ?? null), "label", [], "any", false, false, true, 66), 66, $this->source), "html", null, true);
                echo "</div>
  ";
            }
            // line 68
            echo "  ";
        }
        // line 69
        echo "  ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 69, $this->source), "html", null, true);
        echo "
";
        // line 71
        echo "  <div class=\"block-content\">
    ";
        // line 72
        $this->displayBlock('content', $context, $blocks);
        // line 75
        echo "  </div>
</nav>
</div>
";
    }

    // line 72
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 73
        echo "      ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 73, $this->source), "html", null, true);
        echo "
    ";
    }

    public function getTemplateName()
    {
        return "themes/contrib/zeropoint/templates/block/block--system-menu-block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  129 => 73,  125 => 72,  118 => 75,  116 => 72,  113 => 71,  108 => 69,  105 => 68,  97 => 66,  94 => 65,  91 => 64,  83 => 62,  80 => 61,  77 => 60,  73 => 58,  71 => 57,  66 => 56,  63 => 55,  60 => 54,  57 => 53,  50 => 51,  48 => 49,  45 => 48,  43 => 43,  41 => 39,  40 => 35,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/zeropoint/templates/block/block--system-menu-block.html.twig", "C:\\xampp\\htdocs\\drupal\\themes\\contrib\\zeropoint\\templates\\block\\block--system-menu-block.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 35, "if" => 53, "block" => 72);
        static $filters = array("clean_class" => 39, "clean_id" => 49, "escape" => 51, "without" => 51);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['clean_class', 'clean_id', 'escape', 'without'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
